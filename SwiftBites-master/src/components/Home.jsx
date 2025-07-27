// components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <h2 className="tagline">NO LINES. NO HASSLE.</h2>

      <div className="grid">
        <button className="tile">
          <div className="tile-content">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" 
              alt="Proodle" 
              className="tile-image" 
            />
            <div className="tile-overlay">
              <span className="tile-text">Proodle</span>
            </div>
          </div>
        </button>
        <button className="tile">
          <div className="tile-content">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80" 
              alt="SRR" 
              className="tile-image" 
            />
            <div className="tile-overlay">
              <span className="tile-text">SRR</span>
            </div>
          </div>
        </button>
        <button className="tile">
          <div className="tile-content">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80" 
              alt="Foodcy" 
              className="tile-image" 
            />
            <div className="tile-overlay">
              <span className="tile-text">Foodcy</span>
            </div>
          </div>
        </button>
        <button className="tile">
          <div className="tile-content">
            <img 
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80" 
              alt="JB" 
              className="tile-image" 
            />
            <div className="tile-overlay">
              <span className="tile-text">JB</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;