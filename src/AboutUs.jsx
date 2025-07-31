import React from "react";
import aboutBg from "./assets/about-bg.jpg"; // ✅ Adjust path if needed


const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-6"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-60 backdrop-blur-md p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          About Krystal Traders
        </h1>

        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
          At <strong>Krystal Traders</strong>, we’re dedicated to delivering quality products across electronics, fashion, books, home essentials and more — with a strong commitment to customer satisfaction.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Passion</h2>
          <p className="text-gray-800">
            We are passionate about <span className="font-medium">innovation, integrity, and exceeding customer expectations</span> in every product we offer.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h2>
          <p className="text-gray-800">
            To become the <strong>most trusted and reliable online marketplace</strong> in the region, known for our service and product quality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Core Values</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Integrity in every transaction</li>
            <li>Customer Satisfaction as our top priority</li>
            <li>Continuous Innovation and growth</li>
            <li>Teamwork and collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
