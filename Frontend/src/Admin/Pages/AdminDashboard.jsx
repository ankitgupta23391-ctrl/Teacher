import { useEffect, useState } from "react";
import axios from "axios";
import { AdminSidebar } from "../Components/AdminSidebar";

export default function AdminDashboard() {

  const [teachers, setTeachers] = useState([]);

  // LOAD TEACHERS
  const loadTeachers = async () => {

    try {

      const res = await axios.get(
        "https://teacher-2-wbvk.onrender.com/allteachers"
      );

      setTeachers(res.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  // TOTAL TEACHERS
  const totalTeachers = teachers.length;

  // TOTAL SUBJECTS
  const totalSubjects = [
    ...new Set(teachers.map((teacher) => teacher.sub))
  ].length;

  // ACTIVE TEACHERS
  const activeTeachers = teachers.filter(
    (teacher) => teacher.status === "active"
  ).length;

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1 p-10 ml-60">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Teacher Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* TOTAL TEACHERS */}
          <div className="bg-white shadow-xl rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              Total Teachers
            </h2>

            <p className="text-5xl font-bold text-gray-800">
              {totalTeachers}
            </p>

          </div>

          {/* SUBJECTS */}
          <div className="bg-white shadow-xl rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-green-600 mb-3">
              Subjects
            </h2>

            <p className="text-5xl font-bold text-gray-800">
              {totalSubjects}
            </p>

          </div>

          {/* ACTIVE TEACHERS */}
          <div className="bg-white shadow-xl rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-purple-600 mb-3">
              Active Teachers
            </h2>

            <p className="text-5xl font-bold text-gray-800">
              {activeTeachers}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}