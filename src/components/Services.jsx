import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Palette, Server } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Palette size={34} className="text-violet-400 dark:text-violet-400" />,
      title: "UI / UX Design",
      desc: "Modern, kullanıcı dostu ve duyarlı arayüzler tasarlıyorum.",
    },
    {
      icon: <Code2 size={34} className="text-violet-400 dark:text-violet-400" />,
      title: "Frontend Development",
      desc: "React, Next.js ve Tailwind kullanarak performanslı web uygulamaları geliştiriyorum.",
    },
    {
      icon: <Server size={34} className="text-violet-400 dark:text-violet-400" />,
      title: "Backend Development",
      desc: "Node.js, Prisma ve PostgreSQL tabanlı ölçeklenebilir backend mimarileri kuruyorum.",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] transition-colors duration-500 border-t border-gray-200 dark:border-white/5"
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
          className="text-5xl font-['Orbitron'] text-gray-900 dark:text-white mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("servicesTitle") || "My Services"}
        </motion.h2>

        {/* Servis kartları */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="relative group rounded-2xl p-8 border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:border-violet-500/40 transition"
              whileHover={{ scale: 1.03 }}
            >
              {/* Neon accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-violet-100/60 dark:bg-violet-500/10 shadow-inner">
                  {s.icon}
                </div>

                <h3 className="text-xl font-['Orbitron'] text-gray-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition">
                  {s.title}
                </h3>

                <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
