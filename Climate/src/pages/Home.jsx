import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          🌤 Weather Dashboard
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Get real-time weather updates for your city and see conditions in top
          cities around the world.
        </p>

        <Link to="/dashboard">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition">
            Search Weather
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
