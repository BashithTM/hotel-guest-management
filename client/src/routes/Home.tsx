import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-3"> Hotel Guest Management</h1>
        <p className="text-gray-600 mb-8">
          Add, edit, search and manage hotel guests easily.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/guests"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
          >
            View Guests
          </Link>
          <Link
            to="/guests/new"
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium"
          >
            
            Add Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
