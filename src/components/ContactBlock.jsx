import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactBlock() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-['Orbitron'] text-gray-900 dark:text-white mb-10 drop-shadow-[0_0_15px_rgba(168,85,247,.4)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Bilgiler grid yapısında */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Şehir */}
          <div className="p-5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,.25)] transition">
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaMapMarkerAlt size={20} />
              <h3 className="font-['Orbitron'] text-base">Location</h3>
            </div>
            <p className="text-gray-700 dark:text-white/70 text-sm">
              Malatya, Turkey
            </p>
          </div>

          {/* Mail */}
          <div className="p-5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,.25)] transition">
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaEnvelope size={20} />
              <h3 className="font-['Orbitron'] text-base">Email</h3>
            </div>
            <a
              href="abdulkerimtetik0@gmail.com"
              className="text-gray-700 dark:text-white/70 text-sm hover:text-violet-500 transition"
            >
              abdulkerimtetik0@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="p-5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,.25)] transition">
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaGithub size={20} />
              <h3 className="font-['Orbitron'] text-base">GitHub</h3>
            </div>
            <a
              href="https://github.com/kerimtetik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white/70 text-sm hover:text-violet-500 transition"
            >
              github.com/kerimtetik
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,.25)] transition">
            <div className="flex items-center gap-3 mb-2 text-violet-500 dark:text-violet-400">
              <FaLinkedin size={20} />
              <h3 className="font-['Orbitron'] text-base">LinkedIn</h3>
            </div>
            <a
              href="https://www.linkedin.com/in/kerim-tetik-708168221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white/70 text-sm hover:text-violet-500 transition"
            >
              Kerim Tetik
            </a>
          </div>
        </motion.div>

        {/* Alt teşekkür metni */}
        <motion.p
          className="mt-12 text-gray-600 dark:text-white/60 text-sm font-light"
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
