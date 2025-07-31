import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactPage from "./contact/ContactPage";
import AboutUs from "./AboutUs"; // ✅ Import About Us page
import "./App.css";
import BurnerSlider from "./assets/components/BurnerSlider";
import { useState } from "react"; // ✅ ADD THIS
import Services from "./Services";
import ElectronicsSold from "./ElectronicsSold"; // ✅ Import this


// Simple Header
const Header = () => (
  <header className="p-4 bg-gray-100 text-center font-bold">Krystal Traders</header>
);

// ✅ Home Page with Burner Slider included
const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <ul className="flex gap-4 items-center">
          <li><Link to="/">Home</Link></li>

          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="cursor-pointer bg-gray-200 px-3 py-1 rounded"
            >
              Categories
            </button>

            {showDropdown && (
              <div className="absolute bottom-full mb-2 bg-white border shadow rounded z-10">
                <ul className="flex flex-col gap-1 p-2">
                  <li><a href="#">Electronics</a></li>
                  <li><a href="#">Clothing</a></li>
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Home & Kitchen</a></li>
                </ul>
              </div>
            )}
          </li>

          
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <BurnerSlider />

      <div className="website-name">KRYSTAL TRADERS</div>
      <main>
        <h2>Welcome to Krystal Traders</h2>
        <p>Explore a wide range of categories and services!</p>
      </main>

      <div className="product">
        <div className="product-name">Sneakers</div>
        <div className="product-price">Ksh 2,500</div>
      </div>
    </div>
  );
};


// App Entry
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} /> {/* ✅ Add this route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/electronics" element={<ElectronicsSold />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;