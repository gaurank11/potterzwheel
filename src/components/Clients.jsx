import React from "react";
import Slider from "react-slick";

const ClientPartners = () => {
  const images = [
    "/Krisumi logo.png",
    "/Real-Estate.jpg",
    "/MVN_group.png",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Client ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ClientPartners;
