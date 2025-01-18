import React from "react";

const WhatsAppFloatingIcon = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-6 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-200">
        <span className="text-md md:text-2xl">💬 WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppFloatingIcon;
