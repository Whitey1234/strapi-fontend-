"use client";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Star } from 'lucide-react';
import React, { useEffect } from 'react'

export default function testmonial() {
  useEffect(()=>{
   Aos.init({
    duration: 2000, // animation duration in ms
    once: true,     // whether animation should happen only once
    easing: 'ease-in-out',
  });
   
  },[])

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Developer",
      image: "https://i.pravatar.cc/150?img=12",
      text: "CPS Academy transformed my career. The courses are practical and the instructors are top-notch!"
    },
    {
      name: "Maria Garcia",
      role: "Marketing Manager",
      image: "https://i.pravatar.cc/150?img=5",
      text: "The best investment I made in my career. Highly recommend to anyone looking to upskill."
    },
    {
      name: "James Wilson",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=8",
      text: "Amazing learning experience. The platform is user-friendly and content is always up-to-date."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from real students
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};