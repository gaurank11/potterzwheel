import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/armchair-green-living-room-with-copy-space.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/loft-home-office-interior-design.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/modern-styled-entryway.webp"
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        {/* Old Image */}
        <motion.img
          key={`old-${images[current]}`}
          src={images[current]}
          alt="Slide"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />

        {/* New Image with Wipe Effect */}
        <motion.img
          key={`new-${images[(current + 1) % images.length]}`}
          src={images[(current + 1) % images.length]}
          alt="Slide"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
