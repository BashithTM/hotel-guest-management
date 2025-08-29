
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { pb } from "../lib/pb";
import type { Guest } from "../types";

export default function Guests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    pb.collection("guests")
      .getFullList<Guest>({ sort: "-created" })
      .then(setGuests);
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return guests;
    return guests.filter((g) =>
      [g.first_name, g.last_name, g.email, g.phone ?? "", g.address ?? ""]
        .some((v) => v?.toLowerCase().includes(s))
    );
  }, [q, guests]);

  async function remove(id: string) {
    const ok = window.confirm("Delete this guest? This cannot be undone.");
    if (!ok) return;
    await pb.collection("guests").delete(id);
    setGuests((prev) => prev.filter((g) => g.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Guests</h1>
              <p className="text-gray-500"> </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700">
                Total: <b className="ml-1">{guests.length}</b>
              </span>
              <Link
                to="/guests/new"
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                + Add Guest
              </Link>
            </div>
          </div>

          
          <div className="mt-5">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, email, phone, address…"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Address</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((g) => (
                  <tr key={g.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      <div className="font-medium text-gray-900">
                        {g.first_name} {g.last_name}
                      </div>
                    </td>
                    <td className="p-3 text-gray-700">{g.email}</td>
                    <td className="p-3 text-gray-700">{g.phone ?? "-"}</td>
                    <td className="p-3 text-gray-700 truncate max-w-[260px]">
                      {g.address ?? "-"}
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-2">
                        <Link
                          to={`/guests/${g.id}`}
                          className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => remove(g.id)}
                          className="px-3 py-1.5 rounded bg-red-600 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td className="p-8 text-center text-gray-500" colSpan={5}>
                      No matching guests. Try a different search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <Link to="/" className="text-indigo-600 hover:underline">
              ← Back to Home
            </Link>
            <span className="text-sm text-gray-500">
              Showing {filtered.length} of {guests.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
