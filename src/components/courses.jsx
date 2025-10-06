'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react'

export default function courses() {
  useEffect(()=>{
   Aos.init({
    duration: 2000, // animation duration in ms
    once: true,     // whether animation should happen only once
    easing: 'ease-in-out',
  });
   
  },[])
  
 
  const courses = [
    {
      title: "Full Stack Web Development",
      instructor: "John Doe",
      rating: 4.8,
      students: 2400,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
      price: "$99"
    },
    {
      title: " PYthon Master Bootcamp",
      instructor: "Sarah Smith",
      rating: 4.9,
      students: 1800,
      image: "/Gemini_Generated_Image_es88ljes88ljes88_b2691d35dd.png"
    },
    {
      title: "PHP for Beginners",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 3200,
      image: "php_coding_computer_css_data_digital_function_concept_0248b2999e.jpg"
    }
  ];
  const router = useRouter()

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            Explore our most loved courses by thousands of students
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{course.students.toLocaleString()} students</div>
                </div>
                <button
                onClick={()=> router.push('/courses')}
                className="w-full mt-4 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};