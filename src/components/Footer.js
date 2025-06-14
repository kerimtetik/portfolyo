import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Telif hakkı */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Kerim Tetik</span>. Tüm hakları saklıdır.
        </p>

        {/* Sosyal Linkler */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/kerimtetik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kerim-tetik-708168221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="/contact"
            className="hover:text-pink-400 transition duration-300"
            title="İletişim"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
