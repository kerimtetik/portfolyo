import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">İletişim</h2>
        <p className="text-center text-gray-300 mb-12">
          Benimle aşağıdaki bilgiler üzerinden iletişime geçebilirsiniz.
        </p>

        {/* Bilgi Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-lg shadow">
            <FaMapMarkerAlt size={24} className="text-pink-400 mt-1" />
            <div>
              <p className="font-semibold">Konum</p>
              <p className="text-gray-400">Malatya, Türkiye</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-lg shadow">
            <FaEnvelope size={24} className="text-pink-400 mt-1" />
            <div>
              <p className="font-semibold">E-posta</p>
              <p className="text-gray-400">abdulkerimtetik0@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-lg shadow">
            <FaGithub size={24} className="text-pink-400 mt-1" />
            <div>
              <p className="font-semibold">GitHub</p>
              <a
                href="https://github.com/kerimtetik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                github.com/kerimtetik
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-lg shadow">
            <FaLinkedin size={24} className="text-pink-400 mt-1" />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/kerim-tetik-708168221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                linkedin.com/in/kerim-tetik-708168221/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
