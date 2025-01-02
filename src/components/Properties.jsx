import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react'; // Assuming you have lucide-react installed

const PropertiesPage = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate
  const handleImageClick = () => {
    navigate('/property-details'); // Update with the actual property details page path
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* First Row: 1st Column "01 - Featured Listing" with two images next to it */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div >
          <p className="text-3xl font-bold text-left">01 -</p>
          <p className="text-4xl font-bold leading-none text-left md:text-6xl">FEATURED</p>
          <p className="text-lg text-red-300 mt-2 text-center">LISTING</p>
          {/* View All Properties button below */}
          <button className="mt-4 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition flex items-center space-x-2">
            <Plus size={20} />
            <span>View All Properties</span>
          </button>
        </div>

        {/* Two images in the next two columns */}
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://static1.squarespace.com/static/58487dc4b8a79b6d02499b60/584d011359cc6892ae083eb5/62563bfe2f381a350f45dd0d/1649969146311/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+17.jpg?format=1500w"
              alt="Modern Living Room"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818951216-67YZLYF3OS56FORX7VGS/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpg"
              alt="Luxury Kitchen"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Three images in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://i.ytimg.com/vi/KDMUddVZqwo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPZi1_Rx9EyY9j7NW8vN5FSeEv5g"
              alt="Outdoor Pool"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818942376-Q0DIJ87L6VEKBAAHVKAJ/image-asset.octet-stream?format=500w"
              alt="Luxury Bathroom"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818880529-7E0XTPXMJ03O891CBFG6/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+14.jpeg"
              alt="Cozy Bedroom"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
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
            onClick={handleImageClick}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818874674-ZZL6ZB6OJUUF5M791D0Q/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+2.jpeg"
              alt="Beautiful Balcony"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818878171-HXGSYXD0JI23307551QB/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpeg"
              alt="Spacious Garden"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center group-hover:opacity-100 opacity-0 transition-all">
              <span className="w-7/12">Property Name</span>
              <button className="bg-red-900 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        </div>

     <div className="w-full flex flex-col justify-center space-y-4 h-full">
       <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white  transition hover:text-red-600">
          Interactive Map
       </button>
       <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white  transition hover:text-red-600">
          Sell A Home
       </button>
       <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white  transition hover:text-red-600">
          Search The MLS
       </button>
     </div>

      </div>
    </div>
  );
};

export default PropertiesPage;
