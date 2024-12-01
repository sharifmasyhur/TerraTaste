import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Background from '../Components/Background/Background';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-600">About TerraTaste</h1>
            <p className="text-lg text-gray-700 mt-2">Your guide to eco-friendly eating</p>
        </header>
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
                TerraTaste is an intuitive app that helps people choose foods that aren’t necessarily good for the environment and reduce their carbon footprint. The goal of the software is to reduce food waste, provide information about how food affects the environment, and encourage users to reduce their daily consumption.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Reduce food waste</li>
                <li>Provide information about environmental impact of foods</li>
                <li>Encourage reduced daily consumption</li>
                <li>Plant-based food samples</li>
                <li>Educational resources and visual aids</li>
                <li>Forum for plant-based food discussions</li>
                <li>Environmentally conscious meal ideas</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us</h2>
            <p className="text-gray-700 mb-4">
                To encourage more wholesome eating practices, the app will provide plant-based food samples, educational resources, and visual aids. To encourage people to eat plant-based foods, the app will also provide a forum for users to learn about plant-based foods and find environmentally conscious meal ideas.
            </p>
        </section>
    </div>
    </div>
);
};


export default About;