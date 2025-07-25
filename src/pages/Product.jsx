import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import CursorFollower from "../components/CursorFollower";

const serviceDetails = {
  "1": {
    title: "Custom Tour Packages",
    content: "We design completely personalized travel itineraries based on your tastes, travel style, and pace.",
  },
  "2": {
    title: "Hotel & Accommodation Booking",
    content: "We handpick accommodations ranging from luxurious hotels to boutique countryside inns.",
  },
  "3": {
    title: "Transportation Services",
    content: "Reliable private drivers, car rentals, train bookings, and more to keep you moving smoothly.",
  },
  "4": {
    title: "Guided Tours",
    content: "Local guides offer insight and stories to make your visit unforgettable.",
  },
  "5": {
    title: "Cultural Experiences",
    content: "Enjoy authentic Italian experiences such as cooking classes, wine tours, and artisan workshops.",
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = serviceDetails[id];

  useEffect(() => {
    gsap.from(".detail", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  if (!data) return <div>Service not found</div>;

  return (
    <div className="relative min-h-screen bg-white px-10 py-20 text-gray-800">
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="detail max-w-3xl mx-auto bg-gray-100 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700">{data.content}</p>
      </div>
    </div>
  );
}
