import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

import img1 from '../assets/images/img1.jpg'; 
import img2 from '../assets/images/img2.jpg'; 
import img3 from '../assets/images/img3.jpg'; 
import img4 from '../assets/images/img4.jpg'; 

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="home-container">
      
         <img src={img1} alt="img1" className="feature-image" />
      <header className="hero-section">
        <h1 className="title">Welcome to Coffee Cafe ☕</h1>
        <p className="description">
          Experience the aroma of freshly brewed coffee, handcrafted just for you.
          Enjoy a cozy ambiance, delicious pastries, and warm conversations.
        </p>
        <button className="button" onClick={handleLoginClick}>Today's Menu</button>
      </header>
      
      <section className="features">
        <div className="feature-card">
        <img src={img2} alt="img2" className="feature-image" />
          <h2>☕ Premium Coffee</h2>
          <p>We serve freshly brewed coffee made from the finest beans sourced worldwide.</p>
        </div>
        <div className="feature-card">
        <img src={img3} alt="img3" className="feature-image" />
          <h2>🍰 Tasty Pastries</h2>
          <p>Pair your coffee with our delicious, homemade pastries and desserts.</p>
        </div>
        <div className="feature-card">
        <img src={img4} alt="img4" className="feature-image" />
          <h2>🎶 Relaxing Atmosphere</h2>
          <p>Enjoy a warm and inviting space perfect for work, study, or unwinding.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;