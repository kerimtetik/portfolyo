import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Gözlük E-Ticaret Uygulaması",
      image: "/assets/projects/billreader.png",
      desc: `E-posta doğrulamalı ve JWT tabanlı güvenlik sistemine sahip tam fonksiyonel bir e-ticaret platformu.
      Ürün kataloğu, sepet, sipariş yönetimi ve yönetici paneli içerir. Katmanlı mimariyle inşa edilmiş ve Docker desteği sayesinde kolayca dağıtılabilir yapıdadır.`,
      tech: ["Spring Boot", "Java 17", "PostgreSQL"],
      github: "https://github.com/kerimtetik/eticaret",
      live: "#",
    },
    {
      name: "Bulinio",
      image: "/assets/projects/bulinio.png",
      desc: `E-posta doğrulamalı ve JWT tabanlı güvenlik sistemine sahip tam fonksiyonel bir e-ticaret platformu.
      Ürün kataloğu, sepet, sipariş yönetimi ve yönetici paneli içerir. Katmanlı mimariyle inşa edilmiş ve Docker desteği sayesinde kolayca dağıtılabilir yapıdadır.`,
      tech: ["Expo", "Node.js", "PostgreSQL", "Firebase"],
      github: "https://github.com/atakan-kilinc/Bulinio",
      live: "#",
    },
    {
      name: "YılNak ERP",
      image: "/assets/projects/yilnak.png",
      desc: "Lojistik firmaları için geliştirilen ERP sistemi. Araç, sürücü, sevkiyat ve fatura yönetimi modülleri içerir.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "React Query"],
      github: "https://github.com/atakan-kilinc/Yilnak-ERP",
      live: "#",
    },
    {
      name: "Greenify",
      image: "/assets/projects/greenify.png",
      desc: "Bitki tanıma ve bakım asistanı. Yapay zeka ile bitki tanıma ve kullanıcı forumu özellikleri içerir.",
      tech: ["React Native", "TensorFlow", "Flask", "Firebase"],
      github: "https://github.com/atakan-kilinc/Greenify",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-['Orbitron'] text-gray-900 dark:text-white mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,.4)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm hover:shadow-[0_0_25px_rgba(168,85,247,.25)] transition"
              whileHover={{ scale: 1.02 }}
            >
              {/* Proje görseli */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Bilgi alanı */}
              <div className="p-6 text-left">
                <h3 className="font-['Orbitron'] text-xl text-gray-900 dark:text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-700 dark:text-white/70 text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link butonları */}
                <div className="flex items-center gap-4">
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
