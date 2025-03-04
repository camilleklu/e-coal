import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://source.unsplash.com/600x400/?nature,water",
    "https://source.unsplash.com/600x400/?mountains,forest",
    "https://source.unsplash.com/600x400/?beach,sunset"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-4 max-w-md mx-auto">
      <Navbar />

      <section className="mt-6 text-center w-full">
        <p className="text-sm text-gray-600 border-b border-black pb-1 flex justify-between px-4">
          <span className="text-red-500">Issue nº143</span>
          <span className="text-red-500">March 4, 2025</span>
        </p>
        <h2 className="text-3xl font-extrabold italic mt-4">NEWS</h2>

        <div className="mt-6 border-2 border-black rounded-lg overflow-hidden w-full max-w-xs mx-auto relative">
          <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full border">&lt;</button>
          <img
            src={images[currentImage]}
            alt="Notícia destaque"
            className="w-full h-60 object-cover"
          />
          <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full border">&gt;</button>
        </div>
        <p className="p-3 text-lg font-extrabold italic text-black">HEAD TITRE</p>

        <div className="mt-4 flex justify-center">
          <span className="w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
        </div>

        <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600">
          VOIR PLUS
        </button>

        <hr className="mt-6 border-black" />
      </section>
    </div>
  );
};

export default Home;