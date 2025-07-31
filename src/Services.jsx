import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Electronics Sold",
    description: "Get the latest gadgets, smartphones, TVs, and accessories at unbeatable prices.",
    icon: "📱",
    bgColor: "bg-blue-100",
    link: "/services/electronics",
  },
  {
    title: "Machinery",
    description: "We supply durable industrial and home-use machines to meet your needs.",
    icon: "⚙️",
    bgColor: "bg-gray-100",
    link: "/services/machinery",
  },
  {
    title: "Kids Toys",
    description: "Fun, safe, and educational toys for children of all ages.",
    icon: "🧸",
    bgColor: "bg-yellow-100",
    link: "/services/toys",
  },
  {
    title: "Furniture",
    description: "Quality furniture for your home and office — stylish and affordable.",
    icon: "🪑",
    bgColor: "bg-green-100",
    link: "/services/furniture",
  },
  {
    title: "Utensils",
    description: "Kitchenware and utensils perfect for home chefs and restaurants.",
    icon: "🍽️",
    bgColor: "bg-pink-100",
    link: "/services/utensils",
  },
];

export default function Services() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className={`p-4 rounded shadow ${service.bgColor}`}>
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
