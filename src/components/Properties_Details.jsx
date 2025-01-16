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
          <div className="bg-gray-900 p-5 rounded-lg w-full max-w-md text-center">
            <h3 className="text-lg font-semibold text-white md:text-2xl">Interested in {details} ?</h3>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 ">
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

      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-20">
        {/* Property Details and Price Section */}
        <div>
          <h2 className="text-5xl font-bold text-left lg:text-6xl">{details}</h2>

          <p className="mt-5 text-justify text-[16px] lg:text-[20px]">
            {/* Large styled first letter for desktop */}
            <span
              className="text-6xl lg:text-[70px] font-semibold leading-none lg:float-left lg:mr-4 lg:mt-1"
              style={{ lineHeight: '1.1' }}
            >
              {description.trim()[0].toUpperCase()}
            </span>
            {/* Remaining description */}
            <span className="block">
              {description
                .trim()
                .slice(1)
                .split('\n')
                .map((line, index) => (
                  <span
                    key={index}
                    className="block"
                    style={{
                      display: 'block',
                      marginLeft: index === 0 ? 0 : '1.5em',
                      marginTop: '0.3em',
                    }}
                  >
                    {line}
                  </span>
                ))}
            </span>
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold lg:text-xl">Price:</h3>
            <p className="text-base text-gray-900 lg:text-lg">{price}</p>
          </div>
        </div>

  

      {/* Mobile View */}
      <div className="block lg:hidden mt-6 px-6">
        <h2 className="text-3xl font-bold text-left">{details}</h2>

        <p className="mt-4 text-justify text-[14px]">
          {description}
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Price:</h3>
          <p className="text-base text-gray-900">{price}</p>
        </div>
      </div>

   


<div className="ml-20">
 <div className="flex flex-col gap-4 md:mt-20 md:mx-16 md:text-2xl">

            <button className="px-6 py-3 bg-gray-900 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              Request Details
            </button>
            <button className="px-6 py-3 bg-gray-900 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              Schedule a Showing
            </button>
            <button className="px-6 py-3 bg-gray-900 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
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
<div className="my-8 mt-16">
  <h2 className="text-3xl font-bold text-center md:text-5xl">
    LOCATION
  </h2>
  <p className="text-center p-6 text-md md:text-[20px]">{locationDescription}</p>
  <div className="text-center mt-4">
    <img
      src={mapImage}
      alt="Map location"
      className="w-full h-auto mb-3 bg-gray-900"
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
<div className="text-center my-8 mt-16 ml-10">
  <h2 className="text-3xl font-bold md:text-5xl text-center">AMENITIES</h2>
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
          <h3 className="text-lg md:text-3xl font-semibold text-center">Interested in {details} ?</h3>
          <form onSubmit={onFormSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="block w-full md:w-3/4 mx-auto p-2 mb-3 border rounded-md "
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
