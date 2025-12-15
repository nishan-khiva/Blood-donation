import React, { useState } from "react";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // agar request type change ho rahi hai
    if (name === "type" && value !== "idcard") {
      setPhoto(null);
      setPreview(null);
    }

    setForm({ ...form, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // ID Card ke liye photo mandatory
    if (form.type === "idcard" && !photo) {
      toast.error("📸 Photo is required for ID Card");
      return;
    }

    setLoading(true);

    const fd = new FormData();
    Object.keys(form).forEach((key) => {
      fd.append(key, form[key]);
    });

    if (form.type === "idcard" && photo) {
      fd.append("photo", photo);
    }

    try {
      await api.post("/api/request/submit", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Request submitted successfully!");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        type: "",
      });
      setPhoto(null);
      setPreview(null);
    } catch (err) {
      toast.error(" Error submitting request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-2">
          Request Form
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill the form below to request your Certificate or ID Card.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Full Name
            </label>
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
            <label className="block font-semibold mb-1 text-gray-700">
              Email
            </label>
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
            <label className="block font-semibold mb-1 text-gray-700">
              Phone Number
            </label>
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
            <label className="block font-semibold mb-1 text-gray-700">
              Blood Group
            </label>
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
            <label className="block font-semibold mb-1 text-gray-700">
              Request Type
            </label>
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

          {/* Photo Upload – ONLY FOR ID CARD */}
          {form.type === "idcard" && (
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Upload Your Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPhoto(file);
                  setPreview(file ? URL.createObjectURL(file) : null);
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
          )}

          {/* Submit Button */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7f0210] hover:bg-red-900 disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-lg"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
