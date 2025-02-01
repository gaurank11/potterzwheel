import React, { useState } from "react";
import emailjs from "emailjs-com";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [showForm, setShowForm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [menu, setMenu] = useState("main"); // Track menu states

  const handleUserInput = (e) => setInput(e.target.value);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Your request has been sent successfully!");
        setShowForm(false);
        setFormData({ name: "", phone: "", message: "" });
      })
      .catch(() => {
        alert("An error occurred, please try again.");
      });
  };

  const toggleChat = () => {
    setShowChat(!showChat);
    if (!showChat) {
      setMessages([
        { sender: "bot", text: "Hello! How can I assist you today?" },
      ]);
    }
    setShowForm(false);
    setMenu("main");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-5 bg-blue-900 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-800 transition"
      >
        💬
      </div>

      {showChat && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg border rounded-lg">
          {/* Chat Header with Close Button */}
          <div className="flex justify-between items-center p-3 bg-blue-900 text-white">
            <h2 className="text-lg font-semibold">ChatBot</h2>
            <button onClick={toggleChat} className="text-2xl">&times;</button>
          </div>

          {/* Chat Messages Container */}
          <div className="h-64 overflow-y-auto p-2 border-b">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${msg.sender === "user" ? "text-right text-blue-600" : "text-left text-gray-600"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Main Menu */}
          {menu === "main" && !showForm && (
            <div className="p-3 grid grid-cols-2 gap-2">
              <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white py-2 rounded">
                Request a Call Back
              </button>
              <button onClick={() => setMenu("properties")} className="bg-blue-600 text-white py-2 rounded">
                Properties
              </button>
              <button onClick={() => alert("Interiors section coming soon!")} className="bg-blue-600 text-white py-2 rounded">
                Interiors
              </button>
              <button onClick={() => alert("About Us: We are a real estate platform.")} className="bg-blue-600 text-white py-2 rounded">
                About Us
              </button>
            </div>
          )}

          {/* Properties Menu */}
          {menu === "properties" && (
            <div className="p-3 grid grid-cols-2 gap-2">
              <button onClick={() => setMenu("residential")} className="bg-gray-700 text-white py-2 rounded">
                Residential
              </button>
              <button onClick={() => setMenu("commercial")} className="bg-gray-700 text-white py-2 rounded">
                Commercial
              </button>
              <button onClick={() => setMenu("resources")} className="bg-gray-700 text-white py-2 rounded col-span-2">
                Resources
              </button>
              <button onClick={() => setMenu("main")} className="bg-red-600 text-white py-2 rounded col-span-2">
                Back
              </button>
            </div>
          )}

          {/* Resources Menu */}
          {menu === "resources" && (
            <div className="p-3 grid grid-cols-1 gap-2">
              <button onClick={() => window.location.href = "/emi-calculator"} className="bg-gray-700 text-white py-2 rounded">
                EMI Calculator
              </button>
              <button onClick={() => window.location.href = "/stamp-duty-calculator"} className="bg-gray-700 text-white py-2 rounded">
                Stamp Duty Calculator
              </button>
              <button onClick={() => setMenu("properties")} className="bg-red-600 text-white py-2 rounded">
                Back
              </button>
            </div>
          )}

          {/* Residential & Commercial Placeholder (Will navigate later) */}
          {menu === "residential" && (
            <div className="p-3">
              <p className="text-gray-700 text-sm mb-2">List of Residential Properties</p>
              <button className="bg-gray-700 text-white py-2 rounded w-full">
                Property 1
              </button>
              <button className="bg-gray-700 text-white py-2 rounded w-full mt-2">
                Property 2
              </button>
              <button onClick={() => setMenu("properties")} className="bg-red-600 text-white py-2 rounded w-full mt-2">
                Back
              </button>
            </div>
          )}

          {menu === "commercial" && (
            <div className="p-3">
              <p className="text-gray-700 text-sm mb-2">List of Commercial Properties</p>
              <button className="bg-gray-700 text-white py-2 rounded w-full">
                Commercial Property 1
              </button>
              <button className="bg-gray-700 text-white py-2 rounded w-full mt-2">
                Commercial Property 2
              </button>
              <button onClick={() => setMenu("properties")} className="bg-red-600 text-white py-2 rounded w-full mt-2">
                Back
              </button>
            </div>
          )}

          {/* Call Back Form */}
          {showForm && (
            <form className="p-3 space-y-3" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full border p-2 rounded"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full border p-2 rounded"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Submit
              </button>
              <button onClick={() => setShowForm(false)} className="bg-red-600 text-white py-2 rounded w-full mt-2">
                Cancel
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
