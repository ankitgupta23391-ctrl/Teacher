import { Link } from "react-router";

export function AdminSidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-blue-700 text-white p-6 shadow-lg z-50">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-10">
        Admin Panel
      </h2>

      {/* Links */}
      <div className="flex flex-col gap-4 text-lg">

        <Link
          to="/admin"
          className="hover:bg-blue-800 px-4 py-3 rounded-xl transition"
        >
          Dashboard
        </Link>

        <Link
          to="/addteacher"
          className="hover:bg-blue-800 px-4 py-3 rounded-xl transition"
        >
          Add Teacher
        </Link>

        <Link
          to="/allteachers"
          className="hover:bg-blue-800 px-4 py-3 rounded-xl transition"
        >
          All Teachers
        </Link>

      </div>

    </div>
  );
}