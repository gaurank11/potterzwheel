import React, { useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'; // Importing social media icons from react-icons

const PropertyDetails = ({
  images,
  description,
  price,
  mapImage,
  mapUrl,
  details,
  onFormSubmit,
  amenities,
  location,
  locationDescription,
  handleOpenInMap,
}) => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const shareOnPlatform = (platform) => {
    const currentUrl = encodeURIComponent(window.location.href);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case 'instagram':
        alert('Instagram does not support direct URL sharing via web.');
        return;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="mt-15">
      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-full max-w-md text-center">
            <h3 className="text-lg font-semibold">Interested in this?</h3>
            <form onSubmit={onFormSubmit} className="mt-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Submit
              </button>
            </form>
            <button
              onClick={closePopup}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Images Section (Grid Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Property image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 pl-20 pr-20">
        {/* Property Details and Price Section */}
        <div>
          <h2 className="text-3xl font-bold text-center md:text-5xl ">{details}</h2>
          <p className="mt-5 md:text-[20px] text-justify ">
            <span className="text-3xl font-semibold md:text-[42px]">
              {description.trim()[0].toUpperCase()}
            </span>
            {description.trim().slice(1)}
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold md:text-2xl">Price:</h3>
            <p className="text-lg text-gray-900">{price}</p>
          </div>
        </div>

        {/* Buttons and Share Section */}
        <div>
          <div className="flex flex-col gap-4 md:mt-20 md:mx-20 ">
            <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900 transition hover:text-white">
              Request Details
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900 transition hover:text-white">
              Schedule a Showing
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-900 transition hover:text-white">
              View More Listings
            </button>
          </div>
          <div className="mt-5 flex flex-col items-center md:items-start md:mt-10 md:mx-20 ">
            <p>Share This Listing:</p>
            <div className="flex gap-3 mt-2">
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('facebook')}
              >
                <FaFacebook size={24} />
              </button>
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('instagram')}
              >
                <FaInstagramSquare size={24} />
              </button>
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('linkedin')}
              >
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Location Section */}
      <div className="my-8 mt-5">
        <h2 className="text-3xl font-bold text-center md:text-5xl">
          Project Location
        </h2>
        <p className="text-center p-6 text-md md:text-[20px]">{locationDescription}</p>
        <div className="text-center mt-4">
          <img
            src={mapImage}
            alt="Map location"
            className="w-full h-auto mb-3"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-4">
            {location.map((loc, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-md w-full flex items-center gap-4"
              >
                <img src={loc.icon} alt={loc.name} className="w-16 h-16" />
                <div className="text-left">
                  <p className="font-medium">{loc.name}</p>
                  <p className="text-sm">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md"
            onClick={() => handleOpenInMap(mapUrl)}
          >
            Open in Map
          </button>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="text-center my-8 mt-10">
        <h2 className="text-3xl font-bold md:text-5xl">Project Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-10">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-md w-full flex items-center gap-4"
            >
              <img src={amenity.icon} alt={amenity.name} className="w-16 h-16" />
              <div className="text-left">
                <p className="font-medium">{amenity.name}</p>
                <p className="text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-center">Interested in this?</h3>
          <form onSubmit={onFormSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="block w-full md:w-3/4 mx-auto p-2 mb-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="block w-full md:w-3/4 mx-auto p-2 mb-3 border rounded-md"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="block w-full md:w-3/4 mx-auto p-2 mb-3 border rounded-md"
            ></textarea>
            <button type="submit" className="px-4 py-2 bg-red-900 text-white rounded-md block mx-auto">
              Submit
            </button>
          </form>
        </div>
        </div>
    </div>
  );
};

export default PropertyDetails;
