import { useState } from "react";
import { AdminSidebar } from "../Components/AdminSidebar";

import { toast } from "react-toastify";
import { addTeacher } from "../../service/teacher";


export default function AddTeacher() {

  const [form, setForm] = useState({
    name: "",
    address: "",
    sub: "",
    qualification: "",
    dob: "",
  });

  // CHANGE HANDLER
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await addTeacher(form);

      console.log("SUCCESS RESPONSE:", response.data);

      toast.success(response.data.message || "Teacher Added Successfully");

      setForm({
        name: "",
        address: "",
        sub: "",
        qualification: "",
        dob: "",
      });

    } catch (error) {

      console.log("ERROR RESPONSE:", error.response?.data || error.message);

      toast.error(
        error.response?.data?.message || "Teacher Not Added"
      );

    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ml-60">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Add Teacher
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Teacher Name"
              value={form.name}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <input
              type="text"
              name="sub"
              placeholder="Subject"
              value={form.sub}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              value={form.qualification}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Add Teacher
          </button>

        </form>

      </div>
    </div>
  );
}