import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function TeacherDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);

  // LOAD SINGLE TEACHER
  const loadTeacher = async () => {

    try {

      const res = await axios.get(
        `https://teacher-2-wbvk.onrender.com/viewteacher/${id}`
      );

      console.log(res.data);

      setTeacher(res.data.data);

    } catch (error) {

      console.log(error);

      toast.error("Teacher Not Found");

    }
  };

  useEffect(() => {
    loadTeacher();
  }, [id]);

  // LOADING
  if (!teacher) {

    return (
      <div className="flex min-h-screen bg-gray-100 items-center justify-center">

        <h1 className="text-2xl font-bold">
          Loading...
        </h1>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Teacher Details
        </h1>

        <div className="space-y-4 text-lg">

          <p>
            <span className="font-semibold">Name:</span>
            {teacher.name}
          </p>

          <p>
            <span className="font-semibold">Address:</span>
            {teacher.address}
          </p>

          <p>
            <span className="font-semibold">Subject:</span>
            {teacher.sub}
          </p>

          <p>
            <span className="font-semibold">Qualification:</span>
            {teacher.qualification}
          </p>

          <p>
            <span className="font-semibold">DOB:</span>

            {teacher.dob
              ? new Date(teacher.dob).toLocaleDateString("en-GB")
              : "-"}
          </p>

        </div>

        <button
          onClick={() => navigate("/allteachers")}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
        >
          Back
        </button>

         <button
          onClick={() => navigate("/")}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
        >
         Home
        </button>

      </div>

    </div>
  );
}