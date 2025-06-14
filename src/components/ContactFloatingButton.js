import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactFloatingButton = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      title="İletişim"
    >
      <FaEnvelope size={24} />
    </button>
  );
};

export default ContactFloatingButton;
