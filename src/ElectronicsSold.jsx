// ElectronicsSold.jsx
import React from "react";

const ElectronicsSold = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Electronics Sold</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/150" alt="Phone" className="mb-2 w-full" />
          <h3 className="text-lg font-semibold">Smartphone</h3>
          <p>Ksh 15,000</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/150" alt="TV" className="mb-2 w-full" />
          <h3 className="text-lg font-semibold">Flat Screen TV</h3>
          <p>Ksh 35,000</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/150" alt="Laptop" className="mb-2 w-full" />
          <h3 className="text-lg font-semibold">Laptop</h3>
          <p>Ksh 45,000</p>
        </div>

        {/* You can add more items like Fridge, Bluetooth Speaker, etc. */}
      </div>
    </div>
  );
};

export default ElectronicsSold;
