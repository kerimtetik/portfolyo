import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">İletişim Bilgileri</h2>

        <div className="space-y-6 text-left">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-500 text-xl" />
            <p>Malatya, Türkiye</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-xl" />
            <p>abdulkerimtetik0@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-pink-500 text-xl" />
            <a
              href="https://github.com/kerimtetik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/kerimtetik
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-pink-500 text-xl" />
            <a
              href="https://www.linkedin.com/in/kerim-tetik-708168221/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/kerim-tetik-708168221/
            </a>
          </div>
        </div>

        {/* Geri Dön Butonu */}
        <div className="mt-12">
          <Link to="/">
            <button className="bg-white text-purple-800 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium shadow">
              Ana Sayfaya Dön
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
