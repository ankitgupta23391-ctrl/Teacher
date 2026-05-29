import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AdminSidebar } from "../Components/AdminSidebar";
import { toast } from "react-toastify";
import { getSingleTeacher, updateTeacher } from "../../service/teacher";

export default function EditTeacher() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    sub: "",
    qualification: "",
    dob: "",
  });

  // ✅ LOAD SINGLE TEACHER (FROM SERVICE)
  const loadTeacher = async () => {
    try {
      const res = await getSingleTeacher(id);

      const data = res.data.data;

      setForm({
        name: data.name || "",
        address: data.address || "",
        sub: data.sub || "",
        qualification: data.qualification || "",
        dob: data.dob ? data.dob.substring(0, 10) : "",
      });

    } catch (error) {
      console.log(error);
      toast.error("Teacher not found");
    }
  };

  useEffect(() => {
    loadTeacher();
  }, [id]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE (PATCH)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTeacher(id, form);

      toast.success("Teacher Updated Successfully");

      navigate("/allteachers");

    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ml-60">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">Edit Teacher</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input name="name" value={form.name} onChange={handleChange} className="border p-4 rounded-xl" />
            <input name="address" value={form.address} onChange={handleChange} className="border p-4 rounded-xl" />
            <input name="sub" value={form.sub} onChange={handleChange} className="border p-4 rounded-xl" />
            <input name="qualification" value={form.qualification} onChange={handleChange} className="border p-4 rounded-xl" />

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="border p-4 rounded-xl"
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Update Teacher
          </button>

        </form>

      </div>
    </div>
  );
}