import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react'; // Assuming you have lucide-react installed

const PropertiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* First Row: 1st Column "01 - Featured Listing" with two images next to it */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <p className="text-6xl font-bold text-right md:text-[81px]">FEATURED</p>
          <p className="text-4xl font-semibold text-red-300 mt-2 text-right md:text-[45px]">LISTING</p>
          {/* View All Properties button */}
          <button
      className="mt-6 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-900 transition flex items-center space-x-2 ml-auto md:text-2xl"
      onClick={() => navigate('/properties')} // Navigate to /properties on click
    >
      <span>View All Properties</span>
      <Plus size={20} />
    </button>
        </div>

        {/* Two images in the next two columns */}
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/Krisumi')}
          >
            <img
              src="/Krisumi_Homepage.png"
              alt="Krisumi Properties"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">KRISUMI PROPERTIES</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/mvn')}
          >
            <img
              src="/mvn/overview_img.jpg"
              alt="MVN MALL"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">MVN PROPERTIES</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Three images in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Repeat for all images with the same mobile behavior */}
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/trevoc')}
          >
            <img
              src="/trevoc/t_home.png"
              alt="Outdoor Pool"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">TREVOC PROPERTIES</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/Krisumi')}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818942376-Q0DIJ87L6VEKBAAHVKAJ/image-asset.octet-stream?format=500w"
              alt="Luxury Bathroom"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/Krisumi')}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818880529-7E0XTPXMJ03O891CBFG6/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+14.jpeg"
              alt="Cozy Bedroom"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Two images and three buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/Krisumi')}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818874674-ZZL6ZB6OJUUF5M791D0Q/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+2.jpeg"
              alt="Beautiful Balcony"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/Krisumi')}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818878171-HXGSYXD0JI23307551QB/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpeg"
              alt="Spacious Garden"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-100 transition-all md:opacity-0 md:group-hover:opacity-100">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>

  <div className="w-full flex flex-col justify-center items-center space-y-6 h-full text-2xl md:text-2xl">
  <div className="relative flex items-center w-full md:px-7">
    <div className="h-[2px] w-12 bg-white  left-[-50px]"></div>
    <button className="w-full px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-red-900 transition duration-300">
      Interactive Map
    </button>
  </div>
  <div className="relative flex items-center w-full md:px-7">
    <div className="h-[2px] w-12 bg-white  left-[-50px]"></div>
    <button className="w-full px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-red-900 transition duration-300">
      Sell A Home
    </button>
  </div>
  <div className="relative flex items-center w-full md:px-7">
    <div className="h-[2px] w-12 bg-white  left-[-50px]"></div>
    <button className="w-full px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-red-900 transition duration-300">
      Search The MLS
    </button>
  </div>
</div>




      </div>
    </div>
  );
};

export default PropertiesPage;
