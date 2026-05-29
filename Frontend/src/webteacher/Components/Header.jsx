import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-red-600 fixed text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex items-center  justify-between px-6 py-4">
        <h1 className="text-3xl font-bold">Teacher Portal</h1>

        <nav className="flex gap-6 text-lg font-medium">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#teachers" className="hover:text-yellow-300 transition">
            Teachers
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>

          <Link
            to="/admin"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}