import React from 'react';

const OurServices = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 md:text-6xl">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/** Service cards */}
          {[
            {
              title: 'Property Sales',
              bgImage: 'https://assets.upstox.com/content/assets/images/news/property-price.webp',
            },
            {
              title: 'Property Leasing',
              bgImage: 'https://www.adroitco.in/img/service/leasing-services.webp',
            },
            {
              title: 'Document Management',
              bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxlMl9dj_hxpqpPN32MtLQV6cW_LNfs8dBw&s',
            },
            {
              title: 'Security Solutions',
              bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jccE9AT7yTJwUnYX1LJ0_oeAASCNSV3RRA&s',
            },
            {
              title: 'Home Inspection',
              bgImage: 'https://constrofacilitator.com/wp-content/uploads/2023/06/home-inspection-jpg.webp',
            },
            {
              title: 'Consulting Services',
              bgImage: 'https://www.mindspring.co.in/images/services/industrial-consulting/industrial-consulting.jpg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg h-[350px] flex items-center justify-center group overflow-hidden"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center text-white">
                <h3 className="text-2xl font-semibold">
                  <span className="relative inline-block px-6 py-3">
                    {service.title}
                    <span
                      className="absolute inset-0 border-4 border-gray-300 transform scale-100 group-hover:scale-150 group-hover:scale-y-300 transition-transform duration-300"
                      style={{ transformOrigin: 'center' }}
                    ></span>
                  </span>
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurServices;
