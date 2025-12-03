import React from "react";

// Example images (replace with your own)
import event1 from "../assets/blood.jpeg";
import event2 from "../assets/environment.jpeg";
import event3 from "../assets/health.png";

const EventsPage = () => {
  const events = [
    {
      title: "Blood Donation Camp",
      date: "12 October 2024",
      img: event1,
      description:
        "Our NGO organized a blood donation camp to support Thalassemia and cancer patients who require timely blood supply.",
    },
    {
      title: "Tree Plantation Drive",
      date: "05 September 2024",
      img: event2,
      description:
        "A successful plantation event where volunteers planted over 200 trees for a greener environment.",
    },
    {
      title: "Health Checkup Camp",
      date: "20 August 2024",
      img: event3,
      description:
        "Free health checkup camp for underprivileged families, providing essential medical support.",
    },
  ];

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{event.date}</p>
              <p className="text-gray-700 text-base">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;