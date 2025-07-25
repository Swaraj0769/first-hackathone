import React from 'react';
import './Travel.css';

const Travel = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-500 flex flex-col items-center justify-center px-4 py-10 gap-16">
      
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Adventure Time
      </h1>

      {/* Section 1: Golden Temple */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        <div className="text-center md:text-left max-w-lg px-2">
          <h2 className="text-white text-2xl font-bold mb-2">Golden Temple, Amritsar</h2>
          <p className="text-white text-sm sm:text-base">
            One of the most visited religious sites in the world. The best time to visit the Golden Temple in Amritsar is during the winter months, from October to March, when the weather is pleasant and cool. Specifically, October to November (Autumn) and December to February (Winter) offer comfortable sightseeing conditions with moderate temperatures and clear skies.
          </p>
        </div>
        <div className="w-32 sm:w-40 md:w-48 transform rotate-120 sm:rotate-170 md:rotate-06 mb-6 md:mb-0">
          <img
            src="https://img.icons8.com/?size=100&id=gnaeNmjbwMKo&format=png&color=000000"
            alt="Icon"
            className="w-full object-contain"
          />
        </div>
        <div className="w-full md:w-94 h-auto">
          <img
            src="../assets/amritsar.jpg"
            alt="Golden Temple"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Section 2: Red Fort */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 max-w-6xl w-full">
        <div className="text-center md:text-left max-w-lg px-2">
          <h2 className="text-white text-2xl font-bold mb-2">Red Fort, Delhi</h2>
          <p className="text-white text-sm sm:text-base">
            The Red Fort is a historic fort in the city of Delhi, India, which served as the main residence of the Mughal Emperors. Built in 1639 by Shah Jahan, it is a UNESCO World Heritage Site known for its red sandstone walls and stunning Mughal architecture.
          </p>
        </div>
        <div className="w-32 sm:w-40 md:w-48 transform rotate-170 sm:rotate-170 md:rotate-0 mt-6 md:mt-0">
          <img
            src="https://img.icons8.com/?size=100&id=bhZVXuqz7qLV&format=png&color=000000"
            alt="Icon"
            className="w-full object-contain"
          />
        </div>
        <div className="w-full md:w-64 h-auto">
          <img
            src="../assets/redfort.jpg"
            alt="Red Fort"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
