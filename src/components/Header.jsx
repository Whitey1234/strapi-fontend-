'use client'
import { Menu, X, BookOpen, Users, Award, ArrowRight, PlayCircle, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { Router } from 'next/router';
import React, { useState } from 'react'

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
console.log("user")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLogout =()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    Router.push('/login')
  }
  return (

// Navigation Component with Scroll Effe
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo with Hover Effect */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-75`}></div>
              <div className={`relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                scrolled ? 'shadow-md' : 'shadow-xl'
              }`}>
                <BookOpen className={`text-white transition-all duration-300 ${
                  scrolled ? 'h-6 w-6' : 'h-7 w-7'
                }`} />
              </div>
            </div>
            <div className="ml-3">
              <span className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                CPS Academy
              </span>
              <div className={`h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}></div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Courses', 'Features', 'Testimonials'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>
            ))}
            
            {/* Login Button with Advanced Effect */}
            {user ?( <div className='relative ml-4 px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group'>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <button onClick={handleLogout} className="relative z-10 flex items-center">
                Logout
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 opacity-0 group-hover:opacity-100 group-hover:ring-4 transition-all duration-300"></div>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>) : ( <Link
              href="/login"
              className="relative ml-4 px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center">
                Login
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 opacity-0 group-hover:opacity-100 group-hover:ring-4 transition-all duration-300"></div>
            </Link>)}
           
          </div>

          {/* Mobile menu button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-gray-100' : 'bg-white shadow-md'
            }`}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {['Home', 'Courses', 'Features', 'Testimonials'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-white bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};