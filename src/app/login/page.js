"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, BookOpen, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1️⃣ Login to get JWT
      const loginRes = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
        {
          identifier: form.identifier,
          password: form.password,
        }
      );

      const token = loginRes.data.jwt;
      localStorage.setItem("token", token);

      // 2️⃣ Fetch user info with role populated
      const userRes = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me?populate=role`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const user = userRes.data;
      //console.log("Logged-in user:", userRes);

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event('localStorageChange'));

      // 3️⃣ Redirect based on role
      const roleName = user.role?.name?.toLowerCase(); // normalize
      console.log("User role:", roleName);

      if (roleName === "student") router.push("/courses");
      else if (roleName === "manager") router.push("/courses");
      else router.push("/"); // default
      router.refresh();

    } catch (err) {
      console.log(err.response?.data || err);
      setError(err.response?.data?.error?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">
      <div className="w-full max-w-md relative">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 mt-14">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 ml-1">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white"
                  value={form.identifier}
                  onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 ml-1">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-blue-600"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Dont have an account?{" "}
            <Link href="/register" className="font-semibold text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
