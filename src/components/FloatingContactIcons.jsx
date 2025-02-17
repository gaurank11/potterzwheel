import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Ensure react-icons is installed

const FloatingContactIcons = ({ phoneNumber, email }) => {
  // Ensure proper formatting of the phone number for WhatsApp
  const formattedPhoneNumber = phoneNumber.replace(/[^\d+]/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;
  const emailUrl = `mailto:${email}`;

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   countryCode: "+91",
  //   service: "",
  //   message: "",
  // });

  // const [modal, setModal] = useState({ show: false, message: "", type: "" });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   emailjs
  //     .sendForm(
  //       "service_j3bcnsv",
  //       "template_8d1xkuo",
  //       e.target,
  //       "LhmPcW1aSL4Bb2D5V"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setModal({ show: true, message: "Message Sent Successfully!", type: "success" });
  //         setFormData({ name: "", email: "", phone: "", countryCode: "+91", service: "", message: "" });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setModal({ show: true, message: "Error sending message!", type: "error" });
  //       }
  //     );
  // };

  return (
    <div className="fixed top-2/3 right-1 md:right-3 flex flex-col space-y-3 items-center transform -translate-y-1/2">


      
      {/* Phone Icon */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
        title="Call Us"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
      </a>

      {/* Email Icon */}
      <a
        href={emailUrl}
        className="bg-gray-500 text-white rounded-full p-4 shadow-lg hover:bg-gray-600 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
        title="Email Us"
      >
        <FaEnvelope className="text-xl md:text-2xl" />
      </a>
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
  );
};

export default FloatingContactIcons;
