import { AdminSidebar } from "../Components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen ml-60">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Teacher Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              Total Teachers
            </h2>
            <p className="text-5xl font-bold text-gray-800">25</p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              Subjects
            </h2>
            <p className="text-5xl font-bold text-gray-800">10</p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-3">
              Active Teachers
            </h2>
            <p className="text-5xl font-bold text-gray-800">20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
