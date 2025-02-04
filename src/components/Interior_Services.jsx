import React from "react";

const services = [
  {
    title: "TURNKEY SERVICES",
    description:
      "Spatial Planning | Floor Plans & Elevations | Theme Curation | Colour Palette Consultation | Lighting Consultation | 2D & 3D Designs | Office Interiors",
    imgSrc:
      "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i1.webp",
    link: "https://www.potterzwheel.com/",
  },
  {
    title: "CUSTOMISED FURNITURE",
    description:
      "Modular Kitchen | Wardrobes (Swing Doors/Sliders) | TV Units | Crockery & Bar Unit | Cabinetry | Bathroom Vanities | Dining Tables | Beds | Coffee Tables | Doors",
    imgSrc:
      "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i2.webp",
    link: "https://www.potterzwheel.com/",
  },
  {
    title: "OTHER SERVICES",
    description:
      "Tiles & Wooden Flooring | Paint & Wallpapers | Aluminium/uPVC Doors & Windows | False Ceiling | Electrical Works | Plumbing Works | Air Conditioning & VRF | CCTV Installation",
    imgSrc:
      "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/i3.webp",
    link: "https://www.potterzwheel.com/",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            <span>OUR SERVICE PORTFOLIO</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300"
            >
              {/* Background Effect (Hidden by Default) */}
              <div className="absolute inset-0 bg-blue-950 rounded-lg translate-y-8 -translate-x-8 scale-95 transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0"></div>

              {/* Card Content (Fixed Height) */}
              <div className="relative bg-white shadow-lg rounded-lg transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">
                <div className="mb-6">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 uppercase">
                    <a
                      href={service.link}
                      className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
