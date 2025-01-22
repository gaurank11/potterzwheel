import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsPartners = () => {
  const partners = [
    { name: 'Company 1', logo: '/Krisumi logo.png' },
    { name: 'Company 2', logo: '/Real-Estate.jpg' },
    { name: 'Company 3', logo: '/MVN_group.png' },
    { name: 'Company 4', logo: 'https://btsbrands.com/wp-content/uploads/2021/08/Real-Estate-Logos-RDE-Capital-Group-1.webp' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-25 md:text-6xl">Our Clients & Partners</h2>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner flex items-center justify-center mx-2"
                style={{ width: "40px", height: "40px" }} // Fixed small size for container
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full" // Ensures image is fully visible without stretching or cutting off
                  />
                ) : (
                  <span className="text-gray-500 text-sm">{partner.name}</span>
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View - Continuous Flow with Duplicates */}
        <div className="hidden lg:block relative overflow-hidden w-full">
          <div
            className="partners-scroll flex gap-12 animate-scroll"
            style={{
              width: `${partners.length * 150 * 2}px`, // Width based on number of partners and duplication
              animationDuration: '15s', // Speed of the animation, can adjust as needed
            }}
          >
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="partner shadow-lg rounded-lg flex items-center justify-center w-32 h-32 md:w-auto md:h-auto"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-600 md:text-2xl">
            Join hands with us and let's craft legacies together!
          </p>
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move the entire width of the first cycle */
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsPartners;
