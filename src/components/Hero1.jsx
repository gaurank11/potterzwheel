import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
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
    "Find your dream adventure!",
    "Unleash your potential!",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slider */}
      <Slider {...settings} className="w-full h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-screen flex items-center justify-center"
          >
            {/* Background Image */}
            <img
              src={image}
              alt={`Slide ${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white opacity-50 transform -translate-y-1/2 m-0 p-0"></div>

            {/* Text Box */}
            <div
              className="absolute top-1/2 w-full transform -translate-y-1/2 flex items-center justify-center px-4"
              style={{
                height: "20%",
              }}
            >
              <div
                className="relative text-white text-center px-4 md:px-6 py-2 md:py-4 rounded-lg bg-black/50 backdrop-blur-md animate-slide-fullvw"
                style={{
                  width: "fit-content",
                }}
              >
                <p className="text-2xl sm:text-2xl md:text-5xl font-semibold">
                  {texts[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-fullvw {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-fullvw {
          animation: slide-fullvw 3s ease-in-out forwards;
        }

        /* Mobile-Specific Adjustments */
        @media (max-width: 640px) {
          .absolute {
            padding: 0 !important; /* Ensure no extra padding */
          }
          .text-base {
            font-size: 0.9rem; /* Smaller text on mobile */
          }

          /* Fixing horizontal line width on mobile */
          .absolute {
            width: 100% !important; /* Ensure line takes full width */
            left: 0 !important; /* Make sure it's aligned from the left */
          }
        }
      `}</style>
    </div>
  );
}
