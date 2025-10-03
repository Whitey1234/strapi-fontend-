// Features Section Component
import { Award, BookOpen, PlayCircle, Users } from 'lucide-react';
import React from 'react'

export default function features() {
    const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "100+ Courses",
      description: "Access a wide range of courses from web development to data science"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificates",
      description: "Earn recognized certificates upon course completion"
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      title: "Lifetime Access",
      description: "Watch course videos anytime, anywhere at your own pace"
    }
  ];
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CPS Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-xl transition duration-300 group">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}