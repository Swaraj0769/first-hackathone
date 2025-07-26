import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Make sure to create this CSS file
// import {sliderData} from '../components/Slider';

const Carousel = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="carousel-container relative">
      {/* Left Arrow */}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-images relative">
        {Array.isArray(images) && images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.image}
                alt={image.name || 'Carousel Image'}
                className="carousel-image w-full h-full object-cover"
                onError={(e) => (e.target.style.display = 'none')}
              />
              <div className="text-overlay absolute bottom-5 left-5 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                {image.name}
              </div>
            </div>
          ))
        ) : (
          <p>No images to display.</p>
        )}
      </div>

      {/* Right Arrow */}
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Indicators (dots) */}
      <div className="carousel-indicators absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
