import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertiesData = [
  {
    id: 1,
    name: 'WATERSIDE RESIDENCES',
    price: '',
    type: 'Residential',
    address: 'Sector 36A, Gurgaon, Haryana',
    image: '/Krisumi_Homepage.png',
    logo: 'Krisumi logo.png',
    link: '/Krisumi'
  },
  
  {
    id: 2,
    name: 'MVN MALL',
    price: '',
    type: 'Commercial',
    address: 'Sector 37D, Gurgaon, Haryana',
    image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp',
    logo: '/MVN_group.png',
    link: '/mvn'
  },
  {
    id: 3,
    name: 'TREVOC ROYAL RESIDENCES',
    price: '',
    type: 'Residential',
    address: 'Sector 56, Gurgaon, Haryana',
    image: '/trevoc/t_home.png',
    logo: '/Real-Estate.jpg',
    link: '/trevoc'
  },
 
  {
    id: 4,
    name: 'Eldeco Fairway Reserve',
    price: '',
    type: 'Residential',
    address: 'Sector 80, Gurgaon, Haryana',
    image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp',
    logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_logo.png',
     link: '/eldico'
  },
  {
    id: 5,
    name: 'Sobha Altus',
    price: '',
    type: 'Residential',
    address: 'Sector 89, Gurgaon, Haryana',
    image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.jpeg',
    logo: '/Real-Estate.jpg',
     link: '/sobha'
  },
  {
    id: 6,
    name: 'SS Camasa',
    price: '',
    type: 'Residential',
    address: 'Sector 90, Gurgaon, Haryana',
    image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.png',
    logo: '/Real-Estate.jpg',
    link: '/camasa'
  },
  {
    id: 7,
    name: 'Waterfall Residence',
    price: '',
    type: 'Residential',
    address: 'Sector- 36A Dwarka Expressway, Gurgaon',
    image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp',
    link: '/waterfall'
  },
  {
    id: 8,
    name: 'Aero One',
    price: '',
    type: 'Residential',
    address: 'Sector- 37D Dwarka Expressway, Gurgaon',
    image: 'https://www.realtorprojects.com/project_pics/MVN%20Aero%20One%20banner-32581.jpg',
    logo: '/Real-Estate.jpg',
    link: '/aero'
  },
];

const TopProperties = () => {
  const [filter, setFilter] = useState('All');

  const filteredProperties =
    filter === 'All'
      ? propertiesData
      : propertiesData.filter((property) => property.type === filter);

  return (
    <>
    <section 
      id="hero" 
      className="h-[70vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('properties_page.png')" }} 
    >
      <h1 
        className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md" 
        style={{ fontFamily: "'NOURD', sans-serif", fontWeight: 'bold' }}
      >
        Listings
      </h1>
    </section>
    
    <section className="py-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 mx-2 rounded-md text-white ${
                filter === 'All' ? 'bg-blue-900' : 'bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('Residential')}
              className={`px-4 py-2 mx-2 rounded-md text-white ${
                filter === 'Residential' ? 'bg-blue-900' : 'bg-gray-700'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('Commercial')}
              className={`px-4 py-2 mx-2 rounded-md text-white ${
                filter === 'Commercial' ? 'bg-blue-900' : 'bg-gray-700'
              }`}
            >
              Commercial
            </button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                {/* Property Image */}
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                >
                
                </div>

                {/* Property Details */}
                <div className="p-4 bg-blue-950 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{property.name}</h3>
                    <p className="text-sm font-semibold">{property.price}</p>
                  </div>
                  <p className="text-sm mb-2">{property.type}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2" />
                      {property.address}
                    </div>
                    {/* Link for navigation */}
                    <Link to={property.link}>
                      <button className="px-4 py-1 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProperties;
