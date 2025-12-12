import React from "react";
import { Plus, Trash2, Edit } from "lucide-react";

const AdminEvent = () => {
  const events = [
    {
      id: 1,
      title: "Blood Donation Camp - Delhi",
      date: "12 Jan 2025",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    },
    {
      id: 2,
      title: "Free Health Checkup Camp",
      date: "22 Jan 2025",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
    },
  ];

  return (
    <div className="p-5">

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Events</h1>

        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={18} /> Add New Event
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow p-3">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{event.date}</p>

            <div className="flex justify-between items-center">
              <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
                <Edit size={16} /> Edit
              </button>

              <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg">
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminEvent;
