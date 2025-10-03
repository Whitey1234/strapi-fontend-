"use client";

import Link from "next/link";

export default function nice() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0em0wIDI0YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0ek0xMiAyOGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMjQgMGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMjQgMGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Join 10,000+ Students Learning with Us
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Future
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
              with Expert-Led Courses
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master in-demand skills with industry professionals. Access premium courses in development, design, marketing, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Start Learning Today
            </Link>
            <Link
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Explore Courses
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 text-sm">Expert Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-blue-100 text-sm">Active Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

     <div className="absolute bottom-0 left-0 right-0">
  <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="white"
    >
      <animate
        attributeName="d"
        dur="6s"
        repeatCount="indefinite"
        values="
          M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z;
          M0 120L60 100C120 90 240 70 360 65C480 60 600 65 720 70C840 75 960 85 1080 88C1200 92 1320 95 1380 95L1440 90V120H0Z;
          M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
      />
    </path>
  </svg>
</div>
    </section>
  );
}
