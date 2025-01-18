import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ensure react-icons is installed

const WhatsAppFloatingIcon = ({ phoneNumber }) => {
  // Ensure proper formatting of the phone number
  const formattedPhoneNumber = phoneNumber.replace(/[^\d+]/g, ""); // Remove unwanted characters
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`; // Universal WhatsApp URL

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-1 md:right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-200 flex items-center space-x-2"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} /> 
      <span className="text-sm md:text-md font-medium">Chat on WhatsApp</span> 
    </a>
  );
};

export default WhatsAppFloatingIcon;
