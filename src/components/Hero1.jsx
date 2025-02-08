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
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img1.jpg",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img2.jpg",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img3.jpg",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img4.jpg",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img5.jpg",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img6.jpg",
  ];

  const texts = [
    "Transparent. Tailored. Totally worth it.  ",
    "Turning dreams into doorsteps.",
    "Smart investments, seamless returns.",
    "High returns, low hassle—that’s how we roll",
    "Turning aspirations into lasting legacies",
    "Timeless addresses, tailored just for you",
  ];

  return (
    <div className="relative w-full md:h-[700px] h-[300px] overflow-hidden bg-black">
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
              className="absolute w-full h-full object-cover"
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
                <p className="text-base sm:text-lg md:text-2xl font-semibold">
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
            padding: 10px 20px;
          }

          /* Make the image full width and height on mobile */
          .slick-slide img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover; /* Ensure the image fully covers the screen */
          }

          .text-base {
            font-size: 0.9rem; /* Smaller text on mobile */
          }

          /* Adjust the horizontal line to be thinner on mobile */
          .slick-slide .absolute.top-1\/2.left-0.w-full {
            height: 1px !important; /* Slimmer line on mobile */
          }

          /* Adjust the text box padding for mobile */
          .text-center {
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  );
}
