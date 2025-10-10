import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#090d16] py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Sol kısım */}
        <div className="text-center md:text-left">
          <h3 className="font-['Orbitron'] text-lg text-gray-900 dark:text-white">
            <span className="text-violet-500 dark:text-violet-400">Kerim</span> Tetik
          </h3>
          <p className="text-gray-600 dark:text-white/60 text-sm mt-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Orta kısım */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
          <a href="#about" className="text-gray-700 dark:text-white/70 hover:text-violet-500 transition">
            About
          </a>
          <a href="#services" className="text-gray-700 dark:text-white/70 hover:text-violet-500 transition">
            Services
          </a>
          <a href="#skills" className="text-gray-700 dark:text-white/70 hover:text-violet-500 transition">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 dark:text-white/70 hover:text-violet-500 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-white/70 hover:text-violet-500 transition">
            Contact
          </a>
        </nav>

        {/* Sağ kısım - Sosyal medya */}
        <div className="flex items-center gap-4 text-gray-600 dark:text-white/70">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Alt çizgi */}
      <div className="mt-8 text-center text-xs text-gray-500 dark:text-white/40">
        Built with using React & TailwindCSS
      </div>
    </footer>
  );
}
