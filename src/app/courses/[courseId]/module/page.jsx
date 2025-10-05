"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { BookOpen, Clock, ChevronRight, Loader2, AlertCircle, GraduationCap, PlayCircle } from "lucide-react";

export default function ModuleListPage() {
  const { courseId } = useParams();
  const router = useRouter();

  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/modules?filters[course][id][$eq]=${courseId}`
        );
        setModules(res.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load modules.");
      } finally {
        setLoading(false);
      }
    };
    

    if (courseId) fetchModules();
  }, [courseId]);
  console.log(modules)

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="relative">
          <Loader2 className="h-16 w-16 text-blue-600 animate-spin" />
          <div className="absolute inset-0 blur-xl bg-blue-400 opacity-20 animate-pulse"></div>
        </div>
        <p className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
          Loading your modules...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-red-600 text-lg">{error}</p>
          <button
            onClick={() => router.back()}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const courseTitle = modules[0]?.course?.title || "Course";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 text-white ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-20">
          <div className="flex items-center justify-center mb-4 ">
            <GraduationCap className="h-12 w-12 mr-3" />
            <div className="h-12 w-1 bg-white/30 mx-4"></div>
            <BookOpen className="h-10 w-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
            {courseTitle}
          </h1>
          
          <p className="text-center text-blue-100 text-lg max-w-2xl mx-auto">
            Explore {modules.length} comprehensive module{modules.length !== 1 ? 's' : ''} designed to enhance your learning journey
          </p>

          {/* Stats Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">{modules.length} Modules</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <PlayCircle className="h-5 w-5" />
              <span className="font-semibold">Interactive Learning</span>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-current text-blue-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {modules.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No modules yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, index) => (
              <div
                key={mod.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(mod.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-pink-400 to-purple-300 "></div>
                  
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="p-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-7 w-7 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {mod.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {Array.isArray(mod.description)
                        ? mod.description[0]?.children?.[0]?.text || "No description available"
                        : mod.description || "No description available"}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                      <Clock className="h-4 w-4" />
                      <span>Published {new Date(mod.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    {console.log(mod.id)}

                    {/* Button */}
                    <button
                      onClick={() =>
                        router.push(`/courses/${courseId}/module/${mod.id}`)
                      }
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl group"
                    >
                      <span>Start Learning</span>
                      <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                        hoveredCard === mod.id ? 'translate-x-1' : ''
                      }`} />
                    </button>
                  </div>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}