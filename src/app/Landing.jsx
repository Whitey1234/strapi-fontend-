import api from "./lib/api";


export default async function Landing() {
  // Fetch courses from Strapi
  const res = await api.get('/courses');
  const courses = res.data.data;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Courses</h1>
      <ul className="mt-4 space-y-2">
        {courses.map(course => (
          <li
            key={course.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="text-xl font-semibold">
              {course.title}
            </h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
