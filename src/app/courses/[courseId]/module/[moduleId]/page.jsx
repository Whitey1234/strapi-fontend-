"use client";

import { useEffect, useState } from "react";
import { PlayCircle, CheckCircle, Clock, Video, Loader2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useParams } from "next/navigation";
import withAuth from "@/components/withAuth";

const LessonsPage = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const {moduleId} = useParams();

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/lessons?filters[module][id][$eq]=${moduleId}&populate=*`
        );
        const data = await res.json();
        setLessons(data.data);
        if (data.data.length > 0) {
          setExpandedLesson(data.data[0].id);
        }
      } catch (error) {
        console.error("Error fetching lessons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [moduleId]);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("youtu.be/")[1]?.split("?")[0] || url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const toggleComplete = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleExpand = (lessonId) => {
    setExpandedLesson((prev) => (prev === lessonId ? null : lessonId));
    setCurrentlyPlaying(lessonId);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="relative">
          <Loader2 className="h-16 w-16 text-indigo-600 animate-spin" />
          <div className="absolute inset-0 blur-xl bg-indigo-400 opacity-20 animate-pulse"></div>
        </div>
        <p className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
          Loading lessons...
        </p>
      </div>
    );
  }

  if (!lessons.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <BookOpen className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No Lessons Yet</h2>
          <p className="text-gray-600">
            This module doesn&apos;t have any lessons at the moment. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  const completionPercentage = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 ">
      <div className="bg-gradient-to-rbg-gradient-to-br from-blue-50 via-white to-purple-50 text-black">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 ">
          <div className="flex items-center gap-3 mb-4 mt-20">
            <Video className="h-10 w-10 " />
            <h1 className="text-4xl font-extrabold tracking-tight ">Course Lessons</h1>
          </div>
          
          <p className="text-purple-100 text-lg mb-6">
            {lessons.length} lesson{lessons.length !== 1 ? 's' : ''} to master this module
          </p>

          <div className="bg-blue-200 rounded-full h-3 backdrop-blur-sm overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 via-pink-400 to-purple-300 h-full rounded-full transition-all duration-500 shadow-lg p-2"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-3 text-sm">
            <span className="text-purple-500">
              {completedLessons.length} of {lessons.length} completed
            </span>
            <span className="font-bold">{completionPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isExpanded = expandedLesson === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  isExpanded
                    ? "border-indigo-500"
                    : isCompleted
                    ? "border-green-200"
                    : "border-transparent"
                }`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(lesson.id)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
                        isCompleted
                          ? "bg-green-500 "
                          : "bg-gradient-to-br from-indigo-500 to-purple-600 "
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {lesson.discription?.[0]?.children?.[0]?.text ||
                          "No description available"}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>~15 min</span>
                        </div>
                        {lesson.videoUrl && (
                          <div className="flex items-center gap-1 text-xs text-indigo-600">
                            <PlayCircle className="h-4 w-4" />
                            <span>Video lesson</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleComplete(lesson.id);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isCompleted
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gradient-to-r from-blue-600 to-purple-500  text-white  hover:bg-gray-200"
                        }`}
                      >
                        {isCompleted ? "Completed" : "Mark Complete"}
                      </button>
                      
                      {isExpanded ? (
                        <ChevronUp className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4 animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        About this lesson
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {lesson.discription?.[0]?.children?.[0]?.text ||
                          "No description available"}
                      </p>
                    </div>

                    {lesson.videoUrl && (
                      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
                        <div className="relative" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={getEmbedUrl(lesson.videoUrl)}
                            title={lesson.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {completionPercentage === 100 && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
            <p className="text-green-100">
              You&apos;ve completed all lessons in this module. Keep up the great work!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(LessonsPage);
