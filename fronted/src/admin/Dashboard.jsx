import React from "react";
import { Users, HeartPulse, Calendar, FileCheck } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Total Donors */}
        <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <Users className="text-blue-600" size={32} />
          </div>
          <div>
            <p className="text-gray-600">Total Donors</p>
            <h2 className="text-2xl font-bold">1,240</h2>
          </div>
        </div>

        {/* Blood Requests */}
        <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
          <div className="bg-red-100 p-4 rounded-full">
            <HeartPulse className="text-red-600" size={32} />
          </div>
          <div>
            <p className="text-gray-600">Blood Requests</p>
            <h2 className="text-2xl font-bold">86</h2>
          </div>
        </div>

        {/* Approved Certificates */}
        <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <FileCheck className="text-green-600" size={32} />
          </div>
          <div>
            <p className="text-gray-600">Approved</p>
            <h2 className="text-2xl font-bold">43</h2>
          </div>
        </div>

        {/* Events */}
        <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
          <div className="bg-yellow-100 p-4 rounded-full">
            <Calendar className="text-yellow-600" size={32} />
          </div>
          <div>
            <p className="text-gray-600">Upcoming Events</p>
            <h2 className="text-2xl font-bold">5</h2>
          </div>
        </div>
      </div>

      {/* Recent Activity + Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Blood Requests */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-bold mb-4">Recent Blood Requests</h2>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>Rahul Sharma - O+</span>
              <span className="text-red-600 font-semibold">Pending</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Aman Gupta - A-</span>
              <span className="text-green-600 font-semibold">Approved</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Priya Verma - B+</span>
              <span className="text-yellow-600 font-semibold">Reviewing</span>
            </li>
          </ul>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>Blood Camp - Delhi</span>
              <span className="font-semibold">12 Jan 2025</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Health Checkup - Noida</span>
              <span className="font-semibold">25 Jan 2025</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Blood Donation Marathon</span>
              <span className="font-semibold">5 Feb 2025</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
