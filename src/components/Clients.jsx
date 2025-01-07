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
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Clients & Partners</h2>

        {/* Partner Logos Motion */}
        <div className="relative overflow-hidden">
          <div
            className="partners-scroll flex gap-12"
            style={{
              animation: 'marquee 20s linear infinite',
              display: 'flex',
              width: 'calc(200% + 24px)',
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner bg-white shadow-lg rounded-lg p-6 flex items-center justify-center"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 object-contain"
                  />
                ) : (
                  <span className="text-gray-500">{partner.name}</span>
                )}
              </div>
            ))}
         
            {partners.map((partner, index) => (
              <div
                key={index + partners.length}
                className="partner bg-white shadow-lg rounded-lg p-6 flex items-center justify-center"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 object-contain"
                  />
                ) : (
                  <span className="text-gray-500">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-600">
            Join hands with us and let's craft legacies together!
          </p>
        </div>
      </div>

      {/* Add marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsPartners;
