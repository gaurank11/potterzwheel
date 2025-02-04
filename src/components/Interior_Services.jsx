import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="wow fadeInUp" data-wow-duration="1s">
          <div className="section_head text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              <span>OUR SERVICE PORTFOLIO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Turnkey Services */}
            <div className="image-box bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="image-box-thumb mb-6">
                <img
                  src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i1.webp"
                  alt="TURNKEY SERVICES"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="image-box-content text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  <a
                    href="https://www.potterzwheel.com/"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    TURNKEY SERVICES
                  </a>
                </h3>
                <p className="text-gray-600 mt-4">
                Spatial Planning | Floor Plans & Elevations | Theme Curation | Colour Palette Consultation | Lighting Consultation | 2D & 3D Designs | Office Interiors
                </p>
              </div>
            </div>

            {/* Customised Furniture */}
            <div className="image-box bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="image-box-thumb mb-6">
                <img
                  src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i2.webp"
                  alt="CUSTOMISED FURNITURE"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="image-box-content text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  <a
                    href="https://www.potterzwheel.com/"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    CUSTOMISED FURNITURE
                  </a>
                </h3>
                <p className="text-gray-600 mt-4">
                  Modular Kitchen | Wardrobes (Swing Doors/Sliders) | TV Units | Crockery & Bar Unit | Cabinetry | Bathroom Vanities | Dining Tables | Beds | Coffee Tables | Doors
                </p>
              </div>
            </div>

            {/* Other Services */}
            <div className="image-box bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="image-box-thumb mb-6">
                <img
                  src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i3.webp"
                  alt="OTHER SERVICES"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="image-box-content text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  <a
                    href="https://www.potterzwheel.com/"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    OTHER SERVICES
                  </a>
                </h3>
                <p className="text-gray-600 mt-4">
                  Tiles & Wooden Flooring | Paint & Wallpapers | Aluminium/uPVC Doors & Windows | False Ceiling | Electrical Works | Plumbing Works | Air Conditioning & VRF | CCTV Installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
