import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  const setCookie = (name, value, seconds) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + seconds * 1000);
    const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookieString;
    console.log(`Cookie set: ${cookieString}`);
  };

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) setVisible(true);

    const timer = setTimeout(() => setVisible(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", 20); // 20 seconds
    setVisible(false);
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "declined", 20); // 20 seconds
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <span className="text-sm">
        We use cookies to improve your experience. By using our site, you accept our{" "}
        <Link to="/privacy" className="underline text-pink-300">
          privacy policy
        </Link>.
      </span>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;