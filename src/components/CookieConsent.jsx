import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(
    !Cookies.get('cookieConsent') // Show banner if consent is not already given
  );

  const handleAcceptAll = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Store consent for 1 year
    setIsVisible(false);
    console.log('Cookies accepted!');
  };

  const handleRejectAll = () => {
    Cookies.set('cookieConsent', 'rejected', { expires: 365 }); // Store rejection for 1 year
    setIsVisible(false);
    console.log('Cookies rejected!');
  };

  if (!isVisible) return null; // Hide banner if consent already exists

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
        <p className="text-sm text-gray-700 mb-4">
          By clicking “Accept All Cookies,” you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Reject All
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
