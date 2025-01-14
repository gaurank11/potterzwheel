import React from 'react';

const ClientsPartners = () => {
  const partners = [
    { name: 'Company 1', logo: '/Krisumi logo.png' },
    { name: 'Company 2', logo: '/Real-Estate.jpg' },
    { name: 'Company 3', logo: '/MVN_group.png' },
    { name: 'Company 4', logo: '' },
    { name: 'Company 5', logo: '' },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 md:text-6xl">Our Clients & Partners</h2>

        {/* Partner Logos Motion */}
        <div className="relative overflow-hidden w-full">
          <div
            className="partners-scroll flex gap-12 animate-scroll"
            style={{ width: `${partners.length * 150}px` }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner shadow-lg rounded-lg flex items-center justify-center w-32 h-32 md:w-auto md:h-auto"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-fit w-full h-full"
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

      {/* Add marquee animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsPartners;
