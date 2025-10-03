import { BookOpen } from 'lucide-react';
import React from 'react'

export default function footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">CPS Academy</span>
            </div>
            <p className="text-gray-400">
              Empowering learners worldwide with quality education and skill development.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Instructors</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new courses</p>
            <input 
              type="email" 
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CPS Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};