"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Edit, Trash2, PlusCircle } from "lucide-react"; // ✅ Lucide Icons

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState(null);
  const router = useRouter();

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

  // Get user and role
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUsers(JSON.parse(storedUser));
  }, []);

  const role = users?.role?.name;
  console.log(role)
  const canManage = role === "manager" || role === "developer"; // ✅ Check role
  
  // Delete Course
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCourses(courses.filter((c) => c.id !== id));
      alert("Course deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete course.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10 mt-14">
        <h1 className="text-3xl font-bold">Our Courses</h1>

        {/* ✅ Add New Course Button for Manager/Developer */}
        {canManage && (
          <button
            onClick={() => router.push("/courses/create")}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <PlusCircle size={20} />
            Add New Course
          </button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => {
          // const img =
          //   course.image?.url &&
          //   `${process.env.NEXT_PUBLIC_STRAPI_URL}${course.image.url}` || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80";
          // console.log(img);

          const staticImages = [
           
            "/pexels_natalie_bond_320378_1643033_08aa4bb01b.jpg",
           
            "/programming_background_collage_de41715f3a.jpg",
             "/php_coding_computer_css_data_digital_function_concept_0248b2999e.jpg",
            
            "/Gemini_Generated_Image_es88ljes88ljes88_b2691d35dd.png",
            "/Gemini_Generated_Image_2je7x22je7x22je7_c59fdf9368.png",
          ];

          const img = staticImages[index % staticImages.length];

          return (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Course Image */}
              <img
                src={img}
                alt={course.title}
                className="h-48 w-full object-cover"
              />

              {/* Course Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.discription}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-bold text-lg">
                    ${course.Price}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⏳ {course.duration}
                  </span>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => router.push(`/courses/${course.id}`)}
                  className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Details
                </button>

                {/* ✅ Manager/Developer Controls */}
                {canManage && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => router.push(`/courses/${course.id}/edit`)}
                      className="flex-1 flex items-center justify-center gap-1 bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      <Edit size={18} /> Edit
                    </button>

                    <button
                      onClick={() => handleDelete(course.id)}
                      className="flex-1 flex items-center justify-center gap-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
