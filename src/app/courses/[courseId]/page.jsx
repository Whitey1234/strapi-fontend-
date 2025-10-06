"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import withAuth from "@/components/withAuth";

function CourseDetailsPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses?populate=image`
        );
        const allCourses = res.data.data;

        // Find course by ID
        const selectedCourse = allCourses.find(
          (c) => c.id === parseInt(courseId)
        );

        if (selectedCourse) {
          setCourse(selectedCourse);
        } else {
          setError("Course not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!course) return <p className="text-center mt-10">Course not found.</p>;

  // Construct image URL from Strapi
  // const imageUrl = course.image
  //   ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${course.image.url}`
  //   : "https://via.placeholder.com/800x400";

  const staticImages = [
     "/programming_background_collage_de41715f3a.jpg",
     "/Gemini_Generated_Image_2je7x22je7x22je7_c59fdf9368.png",
            
            
             "/php_coding_computer_css_data_digital_function_concept_0248b2999e.jpg",
            

             "/pexels_natalie_bond_320378_1643033_08aa4bb01b.jpg",
              "/Gemini_Generated_Image_es88ljes88ljes88_b2691d35dd.png",
            
  ];

  const imageUrl = staticImages[parseInt(courseId) % staticImages.length];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6 text-lg">{course.discription}</p>

          <div className="mt-8 flex justify-between items-center">
            <Link
              href={`/courses/${courseId}/module`}
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Modules
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 font-semibold hover:underline"
            >
              ← Back to All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(CourseDetailsPage);
