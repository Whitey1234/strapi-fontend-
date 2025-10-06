"use client";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, CheckCircle, PlayCircle } from 'lucide-react'
import React, { useEffect } from 'react'


export default function Hero() {
  useEffect(()=>{
   Aos.init({
    duration: 950, // animation duration in ms
    once: true,     // whether animation should happen only once
    easing: 'ease-in-out',
  });
   
  },[])
  return (
    <div>
       
  
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Future with
              <span 
              
               className="text-blue-600"> CPS Academy</span>
            </h1>
            <p data-aos="fade-up"    className="text-lg text-gray-600">
              Master in-demand skills with expert-led courses. Join thousands of students achieving their career goals through our comprehensive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition flex items-center justify-center">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Students learning" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Certificate</div>
                  <div className="text-sm text-gray-600">Recognized Globally</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
 
    </div>
  )
}
