import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Popup from "./popup"; // Ensure Popup is correctly imported

const FloatingContactIcons = ({ phoneNumber, email }) => {
  const formattedPhoneNumber = phoneNumber.replace(/[^\d+]/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="fixed top-2/3 right-1 md:right-3 flex flex-col space-y-3 items-center transform -translate-y-1/2">
        {/* Phone Icon */}
        <a
       href={`tel:${phoneNumber}`}
       className="md:hidden lg:hidden bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
       title="Call Us"
        >
       <FaPhoneAlt className="text-xl md:text-2xl" />
</a>

        {/* Email Icon - Triggers Popup */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-gray-500 text-white rounded-full p-4 shadow-lg hover:bg-gray-600 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
          title="Email Us"
        >
          <FaEnvelope className="text-xl md:text-2xl" />
        </button>

        {/* WhatsApp Icon */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
        </a>
      </div>

      {/* Render Popup only when showPopup is true */}
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </>
  );
};

export default FloatingContactIcons;
