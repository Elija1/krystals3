// src/Machinery.jsx
import React from "react";

const machineryItems = [
  {
    name: "Tractor",
    image: "/images/machinery/tractor.jpg",
    price: "Ksh 850,000",
  },
  {
    name: "Drill Press",
    image: "/images/machinery/drill.jpg",
    price: "Ksh 120,000",
  },
  {
    name: "Cement Mixer",
    image: "/images/machinery/mixer.jpg",
    price: "Ksh 75,000",
  },
];

const Machinery = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Machinery on Sale</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {machineryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-green-700 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machinery;
