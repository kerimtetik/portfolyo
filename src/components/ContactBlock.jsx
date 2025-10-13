import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactBlock() {
  return (
    <section
      id="contact"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        {/* Başlık */}
        <motion.h2
          className="text-5xl font-['Orbitron'] text-gray-900 dark:text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Bilgi Kartları */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Şehir */}
          <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaMapMarkerAlt size={20} />
              <h3 className="font-['Orbitron'] text-base">Location</h3>
            </div>
            <p className="text-gray-700 dark:text-white/80 text-sm">
              Malatya, Turkey
            </p>
          </div>

          {/* Mail */}
          <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaEnvelope size={20} />
              <h3 className="font-['Orbitron'] text-base">Email</h3>
            </div>
            <a
              href="mailto:abdulkerimtetik0@gmail.com"
              className="text-gray-700 dark:text-white/80 text-sm hover:text-violet-500 transition"
            >
              abdulkerimtetik0@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaGithub size={20} />
              <h3 className="font-['Orbitron'] text-base">GitHub</h3>
            </div>
            <a
              href="https://github.com/kerimtetik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white/80 text-sm hover:text-violet-500 transition"
            >
              github.com/kerimtetik
            </a>
          </div>

          {/* LinkedIn */}
          <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaLinkedin size={20} />
              <h3 className="font-['Orbitron'] text-base">LinkedIn</h3>
            </div>
            <a
              href="https://www.linkedin.com/in/kerim-tetik-708168221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white/80 text-sm hover:text-violet-500 transition"
            >
              Kerim Tetik
            </a>
          </div>
        </motion.div>

        {/* Alt teşekkür metni */}
        <motion.p
          className="mt-16 text-gray-600 dark:text-white/70 text-sm font-light max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I’m always open to discussing new projects, collaborations or opportunities.
        </motion.p>
      </div>
    </section>
  );
}
