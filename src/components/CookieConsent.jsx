import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the consent has already been given
    if (!Cookies.get('cookieConsent')) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Set a cookie for user consent
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const handleReject = () => {
    // Remove any existing cookies if rejected
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
    clearAllCookies();
    setIsVisible(false);
  };

  const clearAllCookies = () => {
    Object.keys(Cookies.get()).forEach((cookie) => {
      Cookies.remove(cookie);
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950 text-white p-4 shadow-lg z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
      By clicking “Accept All Cookies,” you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
          <a href="/privacy-policy" className="text-gray-300 underline hover:text-white">
            Privacy Policy
          </a>
        <div>
          <button
            onClick={handleAccept}
            className="bg-white hover:bg-gray-400 text-black px-4 py-2 rounded mr-2"
          >
            Accept All
          </button>
          <button
            onClick={handleReject}
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
