import React, { useState } from "react";
import api from "../api/axiosInstance";

const Track = () => {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const checkStatus = async () => {
    setLoading(true);
    setMsg("");
    setData(null);

    try {
      const res = await api.get(`/api/request/track/${phone}`);

      if (!res.data.success) {
        setMsg("No request found!");
      } else {
        setData(res.data);
      }
    } catch (err) {
      setMsg("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex justify-center items-center">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-red-700">
          Track Your Certificate
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Enter your phone number to check your certificate status.
        </p>

        {/* Input */}
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="w-full px-4 py-3 border rounded-lg mb-4 bg-gray-100 text-base sm:text-lg"
        />

        <button
          onClick={checkStatus}
          className="w-full bg-red-700 hover:bg-red-900 text-white py-3 rounded-lg text-base sm:text-lg"
        >
          {loading ? "Checking..." : "Check Status"}
        </button>

        {/* Msg */}
        {msg && <p className="text-center text-red-600 mt-4">{msg}</p>}

        {/* Result */}
        {data && (
          <div className="mt-6 p-4 sm:p-5 border rounded-xl bg-gray-50 text-sm sm:text-base">
            <h3 className="text-lg sm:text-xl font-semibold">
              Name: {data.name}
            </h3>

            <p className="mt-2">
              Status:{" "}
              <span
                className={`font-bold ${data.status === "approved"
                    ? "text-green-600"
                    : "text-orange-600"
                  }`}
              >
                {data.status.toUpperCase()}
              </span>
            </p>

            {/* CERTIFICATE DOWNLOAD */}
            {data.type === "certificate" && data.certificateUrl && (
              <a
                href={`https://ngo-server-wofi.onrender.com${data.certificateUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg rounded-xl"
              >
                Download Certificate
              </a>
            )}

            {/* ID CARD DOWNLOAD */}
            {data.type === "id" && data.idCardUrl && (
              <a
                href={`https://ngo-server-wofi.onrender.com${data.idCardUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg rounded-xl"
              >
                Download ID Card
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
