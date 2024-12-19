import React from 'react';

const ClientsPartners = () => {
  const partners = [
    { name: 'Company 1', logo: 'partner_logo_1.png' },
    { name: 'Company 2', logo: 'partner_logo_2.png' },
    { name: 'Company 3', logo: 'partner_logo_3.png' },
    { name: 'Company 4', logo: 'partner_logo_4.png' },
    { name: 'Company 5', logo: 'partner_logo_5.png' }, // Add more logos if needed
    { name: 'Company 6', logo: 'partner_logo_6.png' },
    { name: 'Company 7', logo: 'partner_logo_7.png' },
    { name: 'Company 8', logo: 'partner_logo_8.png' },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Clients & Partners</h2>

        {/* Partner Logos Motion */}
        <div className="relative overflow-hidden">
          <div className="partners-scroll flex animate-marquee gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="partner bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" /> {/* Replace with actual logos */}
              </div>
            ))}
            {/* Duplicate the logos to create a continuous scroll */}
            {partners.map((partner, index) => (
              <div key={index + partners.length} className="partner bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-600">Join hands with us and let's craft legacies together!</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;
