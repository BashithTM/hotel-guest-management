
import { useNavigate } from "react-router-dom";
import { pb } from "../lib/pb";

export default function NewGuest() {
  const nav = useNavigate();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await pb.collection("guests").create(Object.fromEntries(fd));
    nav("/guests");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
           Add Guest
        </h1>

        <form onSubmit={onSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              name="first_name"
              required
              placeholder="e.g., John"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              name="last_name"
              required
              placeholder="e.g., Doe"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="e.g., john@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              placeholder="e.g., +94 77 123 4567"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              name="address"
              placeholder="Street, City"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              name="date_of_birth"
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => nav(-1)}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
