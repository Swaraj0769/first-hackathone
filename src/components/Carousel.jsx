// src/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Make sure to create this CSS file

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
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div className="carousel-images">
        {Array.isArray(images) && images.length > 0 ? ( // Check if images is an array and not empty
          images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image.image} alt={image.alt} />
              <div className='w-25 h-10 leading-none  border-2  border-white rounded-lg absolute flex justify-center items-center b-10 text-black '>
            {image.name}
          </div>
            </div>
          ))
        ) : (
          <p>No images to display.</p> // Fallback message or loading indicator
        )}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
