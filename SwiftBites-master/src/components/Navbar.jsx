// components/Navbar.jsx
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <header className="header">
      <h1>SwiftBites</h1>
      <div className="menu-icon" onClick={toggleSlider}>
        ☰
      </div>
      <nav className={`slider-menu ${isSliderOpen ? 'open' : ''}`}>
        <div className="slider-header">
          <h2>Menu</h2>
          <div className="close-icon" onClick={toggleSlider}>
            ×
          </div>
        </div>
        <ul>
          <li>
            <button onClick={toggleSlider}>Home</button>
          </li>
          <li>
            <button onClick={toggleSlider}>My Cart</button>
          </li>
          <li>
            <button onClick={toggleSlider}>My Orders</button>
          </li>
          <li>
            <button onClick={toggleSlider}>Logout</button> {/* Added Logout button */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;