import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import { CheckCircle, XCircle, FileBadge, Trash2 } from "lucide-react";

const Approvals = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({
    id: null,
    type: null,
  });

  // Fetch all requests
  const getRequests = async () => {
    try {
      const res = await api.get("/api/request/all");
      const sorted = (res.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setRequests(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  // Approve
  const approveRequest = async (id) => {
    try {
      setActionLoading({ id, type: "approve" });
      await api.put(`/api/request/approve/${id}`);
      getRequests();
    } finally {
      setActionLoading({ id: null, type: null });
    }
  };

  // Reject
  const rejectRequest = async (id) => {
    try {
      setActionLoading({ id, type: "reject" });
      await api.put(`/api/request/reject/${id}`);
      getRequests();
    } finally {
      setActionLoading({ id: null, type: null });
    }
  };

  //  Delete
  const deleteRequest = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this request?"
    );
    if (!confirmDelete) return;

    try {
      setActionLoading({ id, type: "delete" });
      await api.delete(`/api/request/delete/${id}`);
      setRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setActionLoading({ id: null, type: null });
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Approvals</h1>

      {loading && <p>Loading...</p>}

      {/* ================= DESKTOP TABLE ================= */}
      {!loading && requests.length > 0 && (
        <div className="hidden md:block bg-white shadow-lg rounded-xl px-4 overflow-x-auto max-h-[70vh] overflow-y-auto">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b">
                <th>Name</th>
                <th>Blood</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-b hover:bg-gray-50">
                  <td>{req.name}</td>
                  <td>{req.bloodGroup}</td>
                  <td className="flex items-center gap-1">
                    <FileBadge size={16} /> {req.type}
                  </td>
                  <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                  <td className="font-semibold">
                    {req.status}
                  </td>
                  <td>{req.phone}</td>

                  <td className="flex gap-2 py-2">
                    {/* Approve */}
                    <button
                      onClick={() => approveRequest(req._id)}
                      disabled={req.status !== "pending"}
                      className="bg-green-600 text-white px-2 py-1 rounded"
                    >
                      <CheckCircle size={16} />
                    </button>

                    {/* Reject */}
                    <button
                      onClick={() => rejectRequest(req._id)}
                      disabled={req.status !== "pending"}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      <XCircle size={16} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteRequest(req._id)}
                      className="bg-gray-700 text-white px-2 py-1 rounded"
                      disabled={
                        actionLoading.id === req._id &&
                        actionLoading.type === "delete"
                      }
                    >
                      {actionLoading.id === req._id &&
                      actionLoading.type === "delete" ? (
                        "..."
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= MOBILE VIEW ================= */}
      {!loading && (
        <div className="md:hidden space-y-4 max-h-[75vh] overflow-y-auto">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white shadow rounded-xl p-4"
            >
              <h2 className="font-bold">{req.name}</h2>
              <p>Blood: {req.bloodGroup}</p>
              <p>Phone: {req.phone}</p>
              <p>Status: {req.status}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => approveRequest(req._id)}
                  className="flex-1 bg-green-600 text-white py-2 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectRequest(req._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded"
                >
                  Reject
                </button>

                <button
                  onClick={() => deleteRequest(req._id)}
                  className="bg-gray-700 text-white px-3 rounded"
                >
                  <Trash2 size={18} />
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
