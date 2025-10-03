"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, BookOpen, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
    // 1️⃣ Login to get JWT
    const loginRes = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
      {
        identifier: form.identifier,
        password: form.password,
      }
    );

    const token = loginRes.data.jwt;
    localStorage.setItem("token", token);

    // 2️⃣ Fetch user info (requires auth header)
    const userRes = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const user = userRes.data;
    localStorage.setItem("user", JSON.stringify(user)); // store user info

    console.log("Logged-in user:", user);

    // 3️⃣ Redirect based on role
    const roleName = user.role?.name; // role should now exist
    if (roleName === "student") router.push("/student-dashboard");
    else if (roleName === "Manager") router.push("/manager-dashboard");
    else router.push("/");

  } catch (err) {
      console.log(err);
      setError(err.response?.data?.error?.message || "Invalid credentials"); 
}finally {
    setLoading(false);
  }
}

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-150"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Card Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 mt-14  ">
          
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-shake">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                    value={form.identifier}
                    onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors duration-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  className="text-blue-600"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  className="text-green-600"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  className="text-yellow-600"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  className="text-red-600"
                />
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
            >
              <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-gray-600">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Bottom Decorative Text */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}