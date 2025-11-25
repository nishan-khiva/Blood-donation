import React from "react";
import humanImage from "../assets/human.png";

const WhoCanDonate = () => {
  return (
    <section className="w-full px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

        {/* LEFT TEXT SECTION */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#7f0210] mb-4">
            Who Can Donate
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Donating blood is a simple, safe and life-saving act. But not everyone may
            be eligible to donate. To ensure the safety of both donors and
            recipients, certain health criteria must be met.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Down below is a Questionnaire provided to assess the Health percentage
            based on general norms.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-[#7f0210] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#5c010b] transition">
              Check your eligibility
            </button>

            <button className="border border-[#7f0210] text-[#7f0210] px-6 py-3 rounded-md font-semibold hover:bg-[#7f0210] hover:text-white transition">
              Find Nearby Camps
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src={humanImage}
            alt="Human Body"
            className="w-[300px] md:w-[300px] lg:w-[200px] opacity-90"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoCanDonate;
