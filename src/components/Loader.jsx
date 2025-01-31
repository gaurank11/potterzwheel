import React, { useEffect } from "react";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-950 z-50">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clip Path for Circle */}
        <clipPath id="circle-clip">
          <circle cx="100" cy="100" r="80" />
        </clipPath>

        {/* Water Filling Animation (Inside Circle) */}
        <rect x="0" y="200" width="200" height="200" fill="lightblue" clipPath="url(#circle-clip)">
          <animate attributeName="y" from="200" to="50" dur="4s" fill="freeze" />
          <animate attributeName="height" from="0" to="150" dur="4s" fill="freeze" />
        </rect>

        {/* Outer Circle */}
        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="10" fill="none" />

        {/* PR Text Moving in a Circle (More Crazy) */}
        <text x="100" y="100" textAnchor="middle" fill="white" fontSize="40px" fontWeight="bold" dy="0.3em">
          PR
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100; 360 100 100"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1" to="0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};

export default Loader;
