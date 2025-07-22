import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Hospital Management System
              </h1>
            </div>
            <div className="flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                Patients
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                Doctors
              </NavLink>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                Appointments
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
