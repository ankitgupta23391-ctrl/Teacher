import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AdminSidebar } from "../Components/AdminSidebar";
import { toast } from "react-toastify";
import axios from "axios";

export default function TeacherDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);

  // GET SINGLE TEACHER
  const loadTeacher = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/singleteacher/${id}`
      );

      setTeacher(res.data.data);

    } catch (error) {
      console.log(error);
      toast.error("Teacher not found");
    }
  };

  useEffect(() => {
    loadTeacher();
  }, [id]);

  if (!teacher) {
    return (
      <div className="flex min-h-screen bg-gray-100 ml-60">
        <AdminSidebar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl font-semibold">Loading teacher details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 ml-60">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">Teacher Details</h1>

        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl">

          <div className="space-y-4 text-lg">

            <p><span className="font-semibold">Name:</span> {teacher.name}</p>

            <p><span className="font-semibold">Address:</span> {teacher.address}</p>

            <p><span className="font-semibold">Subject:</span> {teacher.sub}</p>

            <p><span className="font-semibold">Qualification:</span> {teacher.qualification}</p>

            <p>
              <span className="font-semibold">DOB:</span>{" "}
              {teacher.dob ? new Date(teacher.dob).toLocaleDateString("en-GB") : ""}
            </p>

          </div>

          <button
            onClick={() => navigate("/allteachers")}
            className="mt-8 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-900"
          >
            Back to List
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800 ml-10"
          >
            Go to Home
          </button>
        </div>

      </div>
    </div>
  );
}