"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses?populate=image`
        );
        setCourses(res.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 mt-14">Our Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => {
          const data = course; // data already flattened
          const img =
            data.image?.url &&
            `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`;

          return (
            <div
              key={data.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition "
            >
              {/* Course Image */}
              <img
                src={img}
                alt={data.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{data.title}</h2>

                {/* use description field */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {data.discription}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-bold text-lg">
                    ${data.Price}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⏳ {data.duration}
                  </span>
                </div>

                <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
