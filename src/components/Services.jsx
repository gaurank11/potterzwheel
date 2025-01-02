import { Home, Users, Clipboard, Key } from 'lucide-react';

const OurServices = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 md:text-6xl">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Service 1 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://assets.upstox.com/content/assets/images/news/property-price.webp)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 text-center text-black">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-800 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Property Sales
                </span>
              </h3>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://www.adroitco.in/img/service/leasing-services.webp)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-500 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Property Leasing
                </span>
              </h3>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxlMl9dj_hxpqpPN32MtLQV6cW_LNfs8dBw&s)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 text-center text-black">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-800 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Document Management
                </span>
              </h3>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jccE9AT7yTJwUnYX1LJ0_oeAASCNSV3RRA&s)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-500 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Security Solutions
                </span>
              </h3>
            </div>
          </div>

          {/* Service 5 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://constrofacilitator.com/wp-content/uploads/2023/06/home-inspection-jpg.webp)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 text-center text-black">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-800 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Home Inspection
                </span>
              </h3>
            </div>
          </div>

          {/* Service 6 */}
          <div className="service relative bg-cover bg-center rounded-lg p-8 h-[350px] flex items-center justify-center transform transition duration-300 group"
            style={{ backgroundImage: 'url(https://www.mindspring.co.in/images/services/industrial-consulting/industrial-consulting.jpg)' }} // Replace with your actual image
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="relative inline-block px-4 py-2 border-4 border-gray-500 transition-all duration-300 group-hover:border-8 group-hover:px-8 group-hover:py-8 group-hover:w-[250px] group-hover:h-[250px] group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  Consulting Services
                </span>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
