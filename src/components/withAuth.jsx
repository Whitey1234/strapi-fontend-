"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (token && user) {
        const userRole = user.role?.name?.toLowerCase();
        if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
          router.push("/"); // Redirect to home if role is not allowed
        } else {
          setIsAuthenticated(true);
        }
      } else {
        router.push("/login");
      }
    }, [router]);

    if (!isAuthenticated) {
      return <p>Loading...</p>; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
