"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import withAuth from "@/components/withAuth";

function CreateCoursePage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", discription: "", Price: "", duration: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses`,
        { data: form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push("/courses");
    } catch (err) {
      console.error(err);
      setError("Failed to create course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Create Course</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={form.discription}
            onChange={(e) => setForm({ ...form, discription: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={form.Price}
            onChange={(e) => setForm({ ...form, Price: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <input
            type="text"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          {loading ? "Creating..." : "Create Course"}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}

export default withAuth(CreateCoursePage, ["admin", "manager"]);
