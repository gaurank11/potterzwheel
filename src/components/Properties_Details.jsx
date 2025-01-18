import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTimes } from 'react-icons/fa';
import emailjs from "emailjs-com";
 // Importing social media icons from react-icons

 const PropertyDetails = ({
  images,
  description,
  mapImage,
  mapUrl,
  details,
  amenities,
  location,
  locationDescription,
  handleOpenInMap,
  pdfUrl,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 seconds

    // Clean up the timeout when the component is unmounted or when popup is closed
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };


  const close2Popup = () => {
    setShowSchedulePopup(false);
  };

  const open2Popup = () => {
    setShowSchedulePopup(true);
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_j3bcnsv"; 
    const templateID = "template_1ehcvh7"; 
    const userID = "LhmPcW1aSL4Bb2D5V";  

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property: details,
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again.");
        console.error(error);
      });
  };

  const onForm2Submit = (e) => {
    e.preventDefault();

    const serviceID = "service_j3bcnsv"; 
    const templateID = "template_1ehcvh7"; 
    const userID = "LhmPcW1aSL4Bb2D5V"; 

    const template2Params = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(serviceID, templateID, template2Params, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", date: "", time: "" });
      })
      .catch((error) => {
        alert("Failed to schedule showing. Please try again.");
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="mt-15">
    {/* Popup Form */}
        {showPopup && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg w-full max-w-3xl text-center relative">
      <h3 className="text-lg font-semibold text-white md:text-2xl">
      Interested in <span className="text-blue-400">{details}</span> ?
      </h3>
      <form onSubmit={onFormSubmit} className="mt-4 space-y-4">
        {/* Hidden Input for Property */}
        <input
          type="text"
          value={details}
          readOnly
          className="hidden"
          name="property"
          id="property"
        />
        
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
          className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
        />

        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
          className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
          autoComplete="tel"
        />
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          rows="4"
          required
          className="block w-4/5 mx-auto p-2 mb-3 border rounded-md"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Cross button to close the popup */}
      <button
        onClick={closePopup}
        className="absolute top-3 right-3 text-white text-3xl"
      >
        <FaTimes />
      </button>
    </div>
  </div>
)}

{showSchedulePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-red-900 p-8 rounded-lg w-full max-w-lg text-center relative">
            <h3 className="text-lg font-semibold text-white md:text-2xl mb-4">
              Schedule a Showing for <span className="text-yellow-400">{details}</span>
            </h3>
            <form onSubmit={onForm2Submit} className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                autoComplete="tel"
              />
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition"
              >
                Schedule Showing
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={close2Popup}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FaTimes />
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

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:px-20 px-8 ">
 
  {/* Desktop & Laptop View */}
  <div className="hidden lg:block">
  <h2 className="text-6xl font-bold text-center md:text-left lg:text-5xl ">{details}</h2>

  <p className="mt-5 text-justify text-[16px] lg:text-[20px] leading-relaxed">
    {/* Styled first letter */}
    <span className="text-6xl lg:text-[90px] font-semibold leading-none lg:float-left lg:mr-4 lg:mt-1">
      {description.trim()[0].toUpperCase()}
    </span>
    <span>
      {description
        .trim()
        .split(' ')
        .slice(0, 3)
        .join(' ')
        .slice(1)} {/* Exclude the first letter */}
    </span>
    {/* Remaining description continues seamlessly */}
    {description.trim().split(' ').length > 3 && (
      <span className="ml-1">
        {description.trim().split(' ').slice(3).join(' ')}
      </span>
    )}
  </p>
</div>

{/* Mobile View */}
<div className="block lg:hidden mt-6">
  <h2 className="text-[32px] font-bold text-left">{details}</h2>

  <p className="mt-6 text-[14px] text-justify">
    {/* Styled first letter */}
    <span className="text-4xl font-semibold leading-none float-left mr-3">
      {description.trim()[0].toUpperCase()}
    </span>
    <span>
      {description
        .trim()
        .split(' ')
        .slice(0, 3)
        .join(' ')
        .slice(1)} {/* Exclude the first letter */}
    </span>
    {/* Remaining description continues seamlessly */}
    {description.trim().split(' ').length > 3 && (
      <span className="ml-1">
        {description.trim().split(' ').slice(3).join(' ')}
      </span>
    )}
  </p>
</div>


   


<div className=" flex flex-col  ">
 <div className="flex flex-col gap-4 md:mt-20 md:mx-16 md:text-2xl">

            <button 
            onClick={openPopup}
            className="px-6 py-3 bg-gray-900 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              Request Details
            </button>
            <button 
              onClick={open2Popup}
            className="px-6 py-3 bg-gray-900 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
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
      className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md text-center items-center"
      onClick={() => handleOpenInMap(mapUrl)}
    >
      Open in Map
    </button>
  </div>
</div>

{/* Amenities Section */}
<div className="my-8 mt-16">
  <h2 className="text-3xl font-bold md:text-5xl text-center">AMENITIES</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-4">
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

<div className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg md:text-3xl font-bold text-center relative mb-6">
          Interested in <span className="text-blue-400">{details}</span> ?
        </h3>
        <form onSubmit={onFormSubmit} className="space-y-5">
          {/* Hidden Input for Property */}
          <input
            type="text"
            value={details}
            readOnly
            className="hidden"
            name="property"
            id="property"
          />

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="tel"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="4"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="on"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md block mx-auto text-lg font-semibold hover:bg-blue-600 shadow-md transform transition-transform duration-200 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>


    {/* Floating Download Brochure Button (Chat-like Icon) */}
    {pdfUrl && (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <div className="fixed bottom-24 right-1 bg-gray-800 text-white rounded-full p-4 shadow-lg hover:bg-gray-900 transition duration-200">
            <span className="text-md md:text-2xl">📄   Download Brochure</span> {/* You can use an icon here */}
          </div>
        </a>
      )}


    </div>
  );
};

export default PropertyDetails;
