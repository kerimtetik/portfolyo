import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
          İletişim Bilgileri
        </h2>

        <div className="space-y-6 text-left bg-[#1e293b] rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaMapMarkerAlt className="text-emerald-400 text-xl" />
            <p className="text-lg">Malatya, Türkiye</p>
          </div>

          <div className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaEnvelope className="text-emerald-400 text-xl" />
            <p className="text-lg">abdulkerimtetik0@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaGithub className="text-emerald-400 text-xl" />
            <a
              href="https://github.com/kerimtetik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              github.com/kerimtetik
            </a>
          </div>

          <div className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaLinkedin className="text-emerald-400 text-xl" />
            <a
              href="https://www.linkedin.com/in/kerim-tetik-708168221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              linkedin.com/in/kerim-tetik-708168221/
            </a>
          </div>
        </div>

        {/* Geri Dön Butonu */}
        <div className="mt-12">
          <Link to="/">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition font-medium shadow-lg">
              Ana Sayfaya Dön
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
