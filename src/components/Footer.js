import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 via-purple-900 to-black text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Sol taraf - Telif hakkı */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Kerim Tetik. Tüm hakları saklıdır.</p>

        {/* Sağ taraf - Linkler */}
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/kerimtetik" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kerim-tetik-708168221/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="/contact" className="hover:text-white transition">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
