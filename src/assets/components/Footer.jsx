// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Webstore. All rights reserved.</p>
      <p>Contact: info@mywebstore.com | +254 700 000 000</p>
    </footer>
  );
};

export default Footer;
