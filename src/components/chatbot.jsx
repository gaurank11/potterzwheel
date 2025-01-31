import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [showForm, setShowForm] = useState(false);
  const [showChat, setShowChat] = useState(false); // For toggling chat visibility

  const handleUserInput = (e) => setInput(e.target.value);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);

    const response = getBotResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    }, 500);

    setInput('');
  };

  const getBotResponse = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput.includes('hi') || userInput.includes('hello')) {
      return 'Hello! Welcome to our real estate services. How can I assist you today?';
    } else if (userInput.includes('about us')) {
      return 'We are a real estate platform offering a selection of exclusive properties. You can request a call back for more details.';
    } else if (userInput.includes('yes') || userInput.includes('no')) {
      return 'Great! Please choose from the services we offer below.';
    } else {
      return 'Here are the services we offer:\n1. View available properties\n2. Request a call back\n3. Chat with us on WhatsApp';
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Your request has been sent successfully!');
          setShowForm(false);
          setFormData({ name: '', phone: '', message: '' });
        },
        (error) => {
          alert('An error occurred, please try again.');
        }
      );
  };

  const toggleChat = () => {
    setShowChat(!showChat);
    if (!showChat) {
      setMessages([{ sender: 'bot', text: 'Hello! Welcome to our real estate services. How can I assist you today?' }]);
    }
  };

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-5 bg-blue-900 text-white rounded-full cursor-pointer"
      >
        💬
      </div>

      {showChat && (
        <div className="fixed bottom-16 right-5 p-4 max-w-md mx-auto border rounded-lg shadow-md bg-white">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Potterzwheel's ChatBot</h2>
          </div>
          <div className="h-64 overflow-y-auto border p-2 mb-4 rounded">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${msg.sender === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-600'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          {showForm ? (
            <form className="space-y-4" onSubmit={sendEmail}>
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
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Request a Call Back
              </button>
              <button
                onClick={() => {
                  setMessages([...messages, { sender: 'user', text: 'View available properties' }]);
                  setTimeout(() => {
                    setMessages((prev) => [...prev, { sender: 'bot', text: 'Here are available properties: ...' }]);
                  }, 500);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                View Available Properties
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
