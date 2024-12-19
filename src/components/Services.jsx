import { Home, Users, Clipboard, Key } from 'lucide-react';

const OurServices = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1 */}
          <div className="service bg-white shadow-lg rounded-lg p-8 hover:scale-105 transform transition duration-300">
            <Home className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Property Sales</h3>
            <p className="text-gray-600">Helping you find the perfect home with a smooth buying experience.</p>
          </div>
          
          {/* Service 2 */}
          <div className="service bg-white shadow-lg rounded-lg p-8 hover:scale-105 transform transition duration-300">
            <Users className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Property Leasing</h3>
            <p className="text-gray-600">Rent or lease properties with confidence, backed by our expertise.</p>
          </div>
          
          {/* Service 3 */}
          <div className="service bg-white shadow-lg rounded-lg p-8 hover:scale-105 transform transition duration-300">
            <Clipboard className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Document Management</h3>
            <p className="text-gray-600">Ensure all paperwork is handled professionally and efficiently.</p>
          </div>
          
          {/* Service 4 */}
          <div className="service bg-white shadow-lg rounded-lg p-8 hover:scale-105 transform transition duration-300">
            <Key className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Security Solutions</h3>
            <p className="text-gray-600">Offering secure solutions for your property needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
