import React from "react";
import Navbar from "../components/navbar/Navbar";
import Background from "../components/background/Background";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600">
            About TerraTaste
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Your guide to eco-friendly eating
          </p>
        </header>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            TerraTaste is an intuitive app that helps people choose foods that
            aren’t necessarily good for the environment and reduce their carbon
            footprint. The goal of the software is to reduce food waste, provide
            information about how food affects the environment, and encourage
            users to reduce their daily consumption.
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
            To encourage more wholesome eating practices, the app will provide
            plant-based food samples, educational resources, and visual aids. To
            encourage people to eat plant-based foods, the app will also provide
            a forum for users to learn about plant-based foods and find
            environmentally conscious meal ideas.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              What is TerraTaste?
            </h3>
            <p className="text-gray-700">
              TerraTaste is an app designed to help users make eco-friendly food
              choices by providing information about the environmental impact of
              food and promoting sustainable eating practices.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              How does TerraTaste help reduce food waste?
            </h3>
            <p className="text-gray-700">
              TerraTaste helps users reduce food waste by offering eco-friendly
              meal suggestions, encouraging the consumption of plant-based
              foods, and providing information on how to store and use food
              efficiently.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Is the app free to use?
            </h3>
            <p className="text-gray-700">
              Yes, TerraTaste is free to use with no subscription required.
              However, we may offer premium features in the future to enhance
              user experience.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Can I contribute to the community?
            </h3>
            <p className="text-gray-700">
              Yes! TerraTaste has a forum where users can share plant-based
              recipes, tips for reducing food waste, and discuss sustainable
              eating practices.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sustainability Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Store fruits and vegetables in the fridge to prolong their
              freshness and reduce waste.
            </li>
            <li>
              Opt for reusable bags and containers to minimize plastic use.
            </li>
            <li>
              Support local farmers and choose seasonal produce to reduce carbon
              emissions.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">References</h2>
          <ul className="list-decimal list-inside text-gray-700">
            <li>
              Statista, “Nutrition Apps - Worldwide | Statista Market Forecast,”
              Statista.
              <a
                href="https://www.statista.com/outlook/hmo/digital-health/digital-fitness-well-being/health-wellnesscoaching/nutrition-apps/worldwide#revenue"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 25, 2024).
            </li>
            <li>
              Carbon Trust, “Our work and impact,” The Carbon Trust, Oct. 18,
              2022.
              <a
                href="https://www.carbontrust.com/en-as/our-work-and-impact"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 25, 2024).
            </li>
            <li>
              Food and Agriculture Organization, “Climate Change | Food and
              Agriculture Organization of the United Nations,”
              <a
                href="https://www.fao.org/climate-change/en/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 26, 2024).
            </li>
            <li>
              Sustainable Food Trust, “Sustainable Food Trust - Our work,”
              Sustainable Food Trust.
              <a
                href="https://sustainablefoodtrust.org/our-work/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 26, 2024).
            </li>
            <li>
              M. Kropiwnicka, “INDEPENDENT CONSULTANT SUSTAINABLE DEVELOPMENT,”
              INDEPENDENT CONSULTANT SUSTAINABLE DEVELOPMENT, 2024.
              <a
                href="http://foodclimate.weebly.com/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 28, 2024).
            </li>
            <li>
              WWF Organization, “THE FOOTPRINT CALCULATOR REPORT.”
              <a
                href="https://www.wwf.org.uk/sites/default/files/2023-05/WWF-UK-FootprintReport-2023.pdf"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Available
              </a>
              (accessed Nov. 30, 2024).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
