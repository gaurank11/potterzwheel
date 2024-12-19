import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
  ];

  const texts = [
    "Welcome to our platform!",
    "Discover amazing products!",
    "Create unforgettable memories!",
    "Join our journey today!",
    "Join our journey today!",
    "Create unforgettable memories!",
    
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider */}
      <Slider {...settings} className="w-full h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-screen bg-black flex items-center justify-center"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover bg-black"
            />

            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white opacity-50 transform -translate-y-1/2"></div>

            {/* Blur Box with Text */}
            <div
              className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black/50 backdrop-blur-md text-white text-center px-6 py-4 rounded-lg"
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(${index * 50}px)`,
              }}
            >
              <p className="text-lg md:text-2xl font-semibold">{texts[index]}</p>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
