import { FaGithub, FaLinkedin,FaEnvelope  } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home"
    className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] transition-colors duration-500">
      
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-12 gap-8 relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          className="md:col-span-7 pt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-['Orbitron'] text-5xl sm:text-6xl leading-tight text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.h6
            className="font-['Orbitron'] text-2xl sm:text-1xl leading-tight text-gray-700 dark:text-white drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("herocontext")}
          </motion.h6>

          <motion.p
            className="mt-6 text-gray-700 dark:text-white/80 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t("heroDesc")}
          </motion.p>

          <motion.ul
            className="mt-8 space-y-3 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {["Front-End Development  ", "Back-End Development", "Database & API Integration"].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-violet-400 text-2xl font-bold">➤</span>
                <span className="text-gray-800 dark:text-white/90">{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-10 flex items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 text-gray-700 dark:text-white/70">
             <a
    href="https://github.com/kerimtetik"
    aria-label="GitHub"
    className="hover:text-violet-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/kerim-tetik-708168221/"
    aria-label="LinkedIn"
    className="hover:text-violet-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=abdulkerimtetik0@gmail.com&tf=cm"
    aria-label="Email"
    className="hover:text-violet-400"
    target="_blank"
    rel="noopener noreferrer"

  >
    <FaEnvelope size={22} />
  </a>
            
            

             </div> 
          </motion.div>
        </motion.div>

        {/* RIGHT PORTRAIT */}
        <motion.div
          className="md:col-span-5 md:pt-28 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative">
            {/* neon aura */}
            <div className="absolute -inset-6 bg-gradient-to-b from-cyan-400/40 via-fuchsia-400/40 to-violet-400/40 blur-2xl rounded-[2.5rem]" />
            <img
              src="profil3.png"
              alt="portrait"
              className="relative rounded-[2rem] w-[420px] h-[420px] object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
