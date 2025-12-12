import React, { useState } from "react";
import api from "../api/axiosInstance";

export const Request = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    type: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    let fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("bloodGroup", form.bloodGroup);
    fd.append("type", form.type);
    if (photo) fd.append("photo", photo);

    try {
      const res = await api.post("/api/request/submit",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Request Submitted!");
      console.log(res.data);
    } catch (err) {
      alert("Error submitting request");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-2">
          Request Form
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill the form below to request your Certificate or ID Card.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="number"
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Blood Group</label>
            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              required
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          {/* Request Type */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Request Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              required
            >
              <option value="">Select Request Type</option>
              <option value="certificate">Certificate</option>
              <option value="idcard">ID Card</option>
            </select>
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Upload Your Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="w-full border rounded-lg px-4 py-2 bg-gray-100"
              required
            />

            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="preview"
                  className="h-40 w-40 rounded-lg object-cover border shadow"
                />
              </div>
            )}
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#7f0210] hover:bg-red-900 text-white font-semibold py-4 rounded-lg text-lg"
          >
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
};
