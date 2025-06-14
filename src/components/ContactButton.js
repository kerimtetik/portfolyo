// src/components/ContactButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const ContactButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/contact')}
      title="İletişime Geç"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110"
    >
      <FaEnvelope size={24} />
    </button>
  );
};

export default ContactButton;
