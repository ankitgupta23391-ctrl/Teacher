import { useEffect, useState } from "react";
import { allTeacher } from "../../service/teacher";
import { useNavigate } from "react-router";

export function OurTeachers() {

  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  const loadTeachers = async () => {
    try {
      const res = await allTeacher();
      setTeachers(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <section id="teachers" className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Our Teachers
        </h2>

        <p className="text-gray-600 text-lg">
          Meet our professional and experienced teachers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {teachers.map((teacher) => (

          <div
            key={teacher._id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <div className="p-6">

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {teacher.name}
              </h3>

              <p className="text-blue-600 font-semibold mb-2">
                Subject: {teacher.sub}
              </p>

              <p className="text-gray-600 mb-1">
                Qualification: {teacher.qualification}
              </p>

              <p className="text-gray-600 mb-4">
                Address: {teacher.address}
              </p>

              {/* VIEW DETAILS BUTTON */}
              <button
                onClick={() => navigate(`/viewteacher/${teacher._id}`)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Details
              </button>

            </div>
          </div>

        ))}

      </div>
    </section>
  );
}