import React, { useEffect, useState } from 'react';
import './BurnerSlider.css';

import image1 from "../image1.jpg";
import image2 from "../image2.png";
import image3 from "../image3.png";

const BurnerSlider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    { image: image1, text: 'Welcome to Our Store' },
    { image: image2, text: 'Hot Deals' },
    { image: image3, text: 'Shop Now' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={`slide-${i}`}
          className={`slide ${i === index ? 'active' : ''}`}
        />
      ))}
      <div className="slider-text">{slides[index].text}</div>
    </div>
  );
};

export default BurnerSlider;
