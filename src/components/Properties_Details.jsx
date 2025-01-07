import React, { useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'; // Importing social media icons from react-icons

const PropertyDetails = ({ images, description, price, mapImage, onFormSubmit, amenities }) => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="m-5">
      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-full max-w-md text-center">
            <h3 className="text-lg font-semibold">Interested in this?</h3>
            <form onSubmit={onFormSubmit} className="mt-4">
              <input type="text" placeholder="Name" required className="block w-4/5 mx-auto p-2 mb-3 border rounded-md" />
              <input type="email" placeholder="Email" required className="block w-4/5 mx-auto p-2 mb-3 border rounded-md" />
              <textarea placeholder="Message" rows="4" className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"></textarea>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Submit</button>
            </form>
            <button onClick={closePopup} className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md">Close</button>
          </div>
        </div>
      )}

      {/* Images Section */}
      <div className="flex flex-wrap gap-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-1 p-0"
            style={{ flexBasis: 'calc(50% - 0px)' }} // Two images per row on laptop
          >
            <img
              src={image}
              alt={`Property image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Property Description and Pricing */}
      <div className="flex justify-between mt-8">
        <div className="w-full md:w-2/3 pr-4">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p>{description}</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Price</h3>
          <p className="text-lg text-green-600">{price}</p>
        </div>
      </div>

      {/* Buttons and Share Section */}
      <div className="flex flex-col md:w-1/4 mt-8">
        
        <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900  transition hover:text-white">
        Request Details
       </button>
       <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900  transition hover:text-white">
       Schedule a Showing
       </button>
       <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900  transition hover:text-white">
       View More Listings
       </button>
        <div className="mt-5">
          <p>Share This Listing:</p>
          <div className="flex gap-3 mt-2">
            <button className="p-2 bg-gray-300 text-black rounded-md"><FaFacebook size={24} /></button>
            <button className="p-2 bg-gray-300 text-black rounded-md"><FaInstagramSquare size={24} /></button>
            <button className="p-2 bg-gray-300 text-black rounded-md"><FaLinkedin size={24} /></button>
           
          </div>
        </div>
      </div>

      {/* Project Location Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-center">Project Location</h2>
        <p className="text-center">Description about the location goes here.</p>
        <div className="text-center mt-4">
          <img
            src={mapImage}
            alt="Map location"
            className="w-full h-auto mb-3"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Open in Map</button>
        </div>
      </div>

      {/* Project Amenities Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Project Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-4">
          {amenities.slice(0, 6).map((amenity, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md w-24 h-24 flex justify-center items-center">
              <img src={amenity.icon} alt={amenity.name} className="w-12 h-12" />
              <p className="mt-2">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
