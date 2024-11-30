import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Background from '../Components/Background/Background';
import './About.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About TerraTaste</h1>
        </header>
        <section className="about-content">
          <p>
            TerraTaste is dedicated to empowering individuals to understand and 
            reduce the environmental impact of their food consumption. By offering 
            a user-friendly platform to track meals' carbon footprint, TerraTaste 
            enables users to make more sustainable food choices, thus contributing 
            to the global fight against climate change.
          </p>
        </section>
        <section className="about-highlights">
          <h2>Our Features</h2>
          <ul>
            <li>🌱 Real-time carbon tracking for every meal.</li>
            <li>📚 Educational insights on food and sustainability.</li>
            <li>🍽️ Personalized recommendations for eco-friendly alternatives.</li>
            <li>🌍 Promotes small actions for big environmental changes.</li>
          </ul>
        </section>
        <section className="about-cta">
          <h3>Join Us</h3>
          <p>
            Ready to make a difference? Start your journey towards sustainable 
            living with TerraTaste today.
          </p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
    </>
  );
};

export default About;
