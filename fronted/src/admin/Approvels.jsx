import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import { CheckCircle, XCircle, FileBadge } from "lucide-react";

const Approvals = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all requests
  const getRequests = async () => {
    try {
      const res = await api.get("/api/request/all");
      console.log(res.data)
      setRequests(res.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching requests:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  // Approve Request
  const approveRequest = async (id) => {
    try {
      await api.put(`/api/request/approve/${id}`);
      getRequests(); // Refresh data
    } catch (err) {
      console.error("Approve Error:", err);
    }
  };

  // Reject Request
  const rejectRequest = async (id) => {
    try {
      await api.put(`/api/request/reject/${id}`);
      getRequests(); // Refresh data
    } catch (err) {
      console.error("Reject Error:", err);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Approvals</h1>

      {/* Loading */}
      {loading && <p className="text-lg">Loading requests...</p>}

      {/* If No Requests */}
      {!loading && requests.length === 0 && (
        <div className="text-center bg-white p-6 shadow-md rounded-xl">
          <p className="text-xl font-semibold text-gray-600">
            No Requests Found
          </p>
        </div>
      )}

      {/* Desktop Table */}
      {!loading && requests.length > 0 && (
        <div className="hidden md:block bg-white shadow-lg rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="py-3">Name</th>
                <th className="py-3">Blood Group</th>
                <th className="py-3">Request Type</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-b hover:bg-gray-100">
                  <td className="py-3">{req.name}</td>
                  <td className="py-3">{req.bloodGroup}</td>
                  <td className="py-3 flex items-center gap-2">
                    <FileBadge size={18} className="text-blue-600" />
                    {req.type}
                  </td>
                  <td className="py-3">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>

                  <td className="py-3">
                    <span className="text-yellow-600 font-semibold">
                      {req.status}
                    </span>
                  </td>

                  <td className="py-3 flex gap-3">
                    <button
                      onClick={() => approveRequest(req._id)}
                      className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                    >
                      <CheckCircle size={18} /> Approve
                    </button>

                    <button
                      onClick={() => rejectRequest(req._id)}
                      className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                    >
                      <XCircle size={18} /> Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* Mobile Card View */}
      {!loading && requests.length > 0 && (
        <div className="md:hidden space-y-4">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white shadow-md rounded-xl p-4 border"
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{req.name}</h2>
                <span className="text-sm font-semibold text-yellow-600">
                  {req.status}
                </span>
              </div>

              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Blood Group:</span>{" "}
                {req.bloodGroup}
              </p>

              <p className="text-gray-700 flex items-center gap-2 mt-1">
                <FileBadge size={18} className="text-blue-600" />
                <span className="font-semibold">Type:</span> {req.type}
              </p>

              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(req.createdAt).toLocaleDateString()}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => approveRequest(req._id)}
                  className="flex items-center justify-center gap-1 flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  <CheckCircle size={18} /> Approve
                </button>

                <button
                  onClick={() => rejectRequest(req._id)}
                  className="flex items-center justify-center gap-1 flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  <XCircle size={18} /> Reject
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Approvals;
