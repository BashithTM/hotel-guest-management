import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-lg font-bold text-indigo-700">
               Hotel Guest Mgmt
            </Link>
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/guests" className={linkClass("/guests")}>Guests</Link>
            <Link to="/guests/new" className={linkClass("/guests/new")}>Add Guest</Link>
          </div>
        </nav>
      </header>

      
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
