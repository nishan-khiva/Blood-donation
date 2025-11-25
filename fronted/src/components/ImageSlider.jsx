import { useState, useEffect } from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';

export default function ImageSlider() {
  const images = [
    pic1,pic2,pic3,pic4
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [paused, images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-full h-[500px] flex-shrink-0" />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#7f0210]/80 text-white p-2 rounded-full hover:bg-[#7f0210]"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#7f0210]/80 text-white p-2 rounded-full hover:bg-[#7f0210]"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-[#7f0210]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
