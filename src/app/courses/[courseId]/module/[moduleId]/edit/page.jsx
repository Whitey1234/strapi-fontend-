"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import withAuth from "@/components/withAuth";

function EditModulePage() {
  const router = useRouter();
  const { courseId, moduleId } = useParams();
  const [form, setForm] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/modules/${moduleId}`
        );
        setForm(res.data.data.attributes);
      } catch (err) {
        console.error(err);
        setError("Failed to load module details.");
      }
    };

    if (moduleId) {
      fetchModule();
    }
  }, [moduleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/modules/${moduleId}`,
        { data: form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push(`/courses/${courseId}/module`);
    } catch (err) {
      console.error(err);
      setError("Failed to update module.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Edit Module</h1>
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
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          {loading ? "Updating..." : "Update Module"}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}

export default withAuth(EditModulePage, ["admin", "manager"]);
