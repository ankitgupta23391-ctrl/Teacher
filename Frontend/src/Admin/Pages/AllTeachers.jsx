import { useEffect, useState } from "react";
import { AdminSidebar } from "../Components/AdminSidebar";
import { allTeacher, deleteTeacher } from "../../service/teacher";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function AllTeachers() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  // LOAD TEACHERS
  const loadTeachers = async () => {
    try {
      const res = await allTeacher();
      setTeachers(res.data.data || []); // ✅ SAFE FIX
    } catch (error) {
      console.log(error);
      toast.error("Failed to load teachers");
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  // DELETE TEACHER
  const handleDelete = async (id) => {
    try {
      await deleteTeacher(id);

      toast.success("Teacher deleted successfully");

      // ✅ better UX (instant UI update)
      setTeachers((prev) => prev.filter((t) => t._id !== id));

      // optional reload (not required now)
      // loadTeachers();

    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ml-60">

      <AdminSidebar />

      <div className="flex-1 p-10 overflow-x-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          All Teachers
        </h1>

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <table className="w-full border-collapse">

            {/* HEADER */}
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Subject</th>
                <th className="p-4 text-left">Qualification</th>
                <th className="p-4 text-left">DOB</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {teachers.length > 0 ? (
                teachers.map((teacher) => (
                  <tr key={teacher._id} className="border-b hover:bg-gray-100">

                    <td className="p-4">{teacher.name}</td>
                    <td className="p-4">{teacher.address}</td>
                    <td className="p-4">{teacher.sub}</td>
                    <td className="p-4">{teacher.qualification}</td>

                    <td className="p-4">
                      {teacher.dob
                        ? new Date(teacher.dob).toLocaleDateString("en-GB")
                        : "-"}
                    </td>

                    {/* ACTIONS */}
                    <td className="p-4 flex gap-4 items-center">

                      {/* VIEW */}
                      <button
                        onClick={() => navigate(`/viewteacher/${teacher._id}`)}
                        className="text-green-600 hover:text-green-800 text-lg"
                      >
                        <FaEye />
                      </button>

                      {/* EDIT */}
                      <button
                        onClick={() => navigate(`/editteacher/${teacher._id}`)}
                        className="text-blue-600 hover:text-blue-800 text-lg"
                      >
                        <FaEdit />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(teacher._id)}
                        className="text-red-600 hover:text-red-800 text-lg"
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No Teachers Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}