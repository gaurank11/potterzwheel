import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Link, Instagram, Facebook, XIcon, Linkedin, MapPinned } from 'lucide-react';

const Popup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_j3bcnsv",
        "template_8d1xkuo",
        e.target,
        "LhmPcW1aSL4Bb2D5V"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModal({ show: true, message: "Message Sent Successfully!", type: "success" });
          setFormData({ name: "", email: "", phone: "", countryCode: "+91", service: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setModal({ show: true, message: "Error sending message!", type: "error" });
        }
      );
  };

  return (
    <section id="content" className="max-w-7xl mx-auto py-12 px-6 font-dm-sans text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none" required />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none" required />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="flex items-center">
                <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none" required>
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input name="phone" type="text" value={formData.phone} onChange={handleChange}
                  className="ml-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none" required />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit"
              className="w-full bg-blue-900 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal Popup */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`bg-white p-6 rounded-lg shadow-lg text-center ${modal.type === "success" ? "border-green-500" : "border-red-500"} border-4`}>
            <h3 className="text-lg font-bold">{modal.message}</h3>
            <button onClick={() => setModal({ show: false, message: "", type: "" })}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Popup;
