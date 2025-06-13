import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300 mb-10">
        İletişim
      </h2>
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Benimle iletişime geçmekten çekinme. Aşağıdaki bilgiler üzerinden ulaşabilirsin.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl text-indigo-500" />
            <span>kerim@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl text-indigo-500" />
            <span>+90 555 555 55 55</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl text-indigo-500" />
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
