import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState(500);

  const presetAmounts = [100, 300, 500, 1000, 2000, 5000];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-700">Support Our Mission</h1>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto leading-7">
          Your contribution helps us provide emergency blood support, conduct
          health camps, plant trees, and assist Thalassemia & cancer patients.
          Every donation, big or small, makes a life-changing impact.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Donation Card */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Make a Donation</h2>

          <p className="text-gray-600 mb-6 leading-7">
            Choose a preset amount or enter your own. All contributions go
            directly toward supporting patients and community programs.
          </p>

          {/* Preset Amount Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`p-3 rounded-xl font-semibold border shadow-sm hover:bg-red-600 hover:text-white transition ${
                  amount === amt ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800"
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Custom Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-lg shadow focus:ring-2 focus:ring-red-300 outline-none"
              min="50"
            />
          </div>

          {/* Donate Now Button */}
          <button
            className="w-full bg-red-600 text-white p-4 rounded-xl font-semibold text-lg shadow hover:opacity-95"
          >
            Donate ₹{amount}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            *You will be redirected to our secure payment gateway.
          </p>
        </section>

        {/* Impact Section */}
        <aside className="bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Donation Helps</h3>

          <ul className="space-y-4 text-gray-700 leading-7">
            <li>✔ Providing 24/7 emergency blood support to patients.</li>
            <li>✔ Supporting Thalassemia & cancer patients needing regular transfusion.</li>
            <li>✔ Organizing free health & medical checkup camps.</li>
            <li>✔ Conducting environmental drives & tree plantation programs.</li>
            <li>✔ Helping the poor through upcoming free ambulance service.</li>
          </ul>

          <div className="mt-8">
            <h4 className="font-semibold mb-2 text-gray-800">Donate Through UPI</h4>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-gray-700 font-medium">Scan to Donate</p>
              <div className="w-full h-40 bg-white mt-3 rounded-lg shadow flex items-center justify-center">
                {/* Replace with your QR code image */}
                <span className="text-gray-400">QR Code Here</span>
              </div>
              <p className="mt-3 text-gray-600">UPI ID: <strong>susrstrust@upi</strong></p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Donate;