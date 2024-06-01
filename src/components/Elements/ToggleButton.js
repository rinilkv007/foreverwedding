import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarker } from 'react-icons/fa';
const ToggleButton = () => {
  const handleOptionClick = (option) => {
    switch (option) {
      case 'whatsapp':
        window.location.href = 'https://wa.me/';
        break;
      case 'call':
        window.location.href = 'tel:+91';
        break;
      case 'maps':
        const mapLink = document.createElement('a');
        mapLink.href = 'https://www.google.com/maps/place/';
        mapLink.target = '_blank';
        mapLink.rel = 'noopener noreferrer';
        mapLink.click();
        break;
      // Add more cases for additional options
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col gap-4 mt-1">
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('whatsapp')}
        >
          <FaWhatsapp />
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('call')}
        >
          <FaPhone />
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('maps')}
        >
          <FaMapMarker />
        </button>
        {/* Add more buttons for additional options */}
      </div>
    </div>
  );
};

export default ToggleButton;
