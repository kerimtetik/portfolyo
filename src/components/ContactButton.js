// src/components/ContactButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const ContactButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/contact')}
      className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
    >
      <FaEnvelope size={24} />
    </button>
  );
};

export default ContactButton;
