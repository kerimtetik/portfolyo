import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Gözlük E-Ticaret Uygulaması",
      image: "./site1.png",
      desc: `E-posta doğrulamalı ve JWT tabanlı güvenlik sistemine sahip tam fonksiyonel bir e-ticaret platformu.
      Ürün kataloğu, sepet, sipariş yönetimi ve yönetici paneli içerir. Katmanlı mimariyle inşa edilmiş ve Docker desteği sayesinde kolayca dağıtılabilir yapıdadır.`,
      tech: ["Spring Boot", "Java 17", "PostgreSQL"],
      github: "https://github.com/kerimtetik/eticaret",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        <motion.h2
          className="text-5xl font-['Orbitron'] text-gray-900 dark:text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] hover:border-violet-400/40 transition"
              whileHover={{ scale: 1.02 }}
            >
              {/* Proje görseli */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-100 object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Bilgi alanı */}
              <div className="relative p-6 text-left">
                {/* Neon accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />

                <h3 className="font-['Orbitron'] text-2xl text-gray-900 dark:text-white mb-3 group-hover:text-violet-400 transition">
                  {p.name}
                </h3>
                <p className="text-gray-700 dark:text-white/80 text-sm mb-5 leading-relaxed">
                  {p.desc}
                </p>

                {/* Teknoloji etiketleri */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-violet-100/70 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 px-2 py-1 rounded-md border border-transparent hover:border-violet-400/40 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link butonları */}
                <div className="flex items-center gap-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 dark:text-white/80 hover:text-violet-500 dark:hover:text-violet-400 transition"
                  >
                    <FaGithub /> <span className="text-sm font-medium">GitHub</span>
                  </a>

                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 dark:text-white/80 hover:text-violet-500 dark:hover:text-violet-400 transition"
                    >
                      <FaExternalLinkAlt size={14} />{" "}
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
