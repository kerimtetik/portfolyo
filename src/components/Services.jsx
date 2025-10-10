import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Palette, Server } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Palette size={34} className="text-violet-500 dark:text-violet-400" />,
      title: "UI / UX Design",
      desc: "Modern, kullanıcı dostu ve duyarlı arayüzler tasarlıyorum.",
    },
    {
      icon: <Code2 size={34} className="text-violet-500 dark:text-violet-400" />,
      title: "Frontend Development",
      desc: "React, Next.js ve Tailwind kullanarak performanslı web uygulamaları geliştiriyorum.",
    },
    {
      icon: <Server size={34} className="text-violet-500 dark:text-violet-400" />,
      title: "Backend Development",
      desc: "Node.js, Prisma ve PostgreSQL tabanlı ölçeklenebilir backend mimarileri kuruyorum.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Başlık */}
        <motion.h2
          className="text-4xl font-['Orbitron'] text-gray-900 dark:text-white mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,.4)]"
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
              className="group rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-500/40 shadow-sm hover:shadow-[0_0_25px_rgba(168,85,247,.25)] p-8 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-violet-100 dark:bg-violet-500/10">
                  {s.icon}
                </div>
                <h3 className="text-xl font-['Orbitron'] text-gray-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">
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
