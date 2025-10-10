import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-['Orbitron'] text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,.4)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t("aboutTitle")}
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("aboutText")}
        </motion.p>

        <motion.div
          className="mt-12 grid sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[           
            {num: "77", text: "ALES" },
            { text: `İnönü Üniversitesi
              Bilgisayar Mühendisliği (Lisans)
              2021-2025`
              ,num: "3.03/4.00", },           
            { num: "B1", text: "İngilizce\n Seviyesi " },
          ].map((it, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-violet-500/40 transition"
            >
              <h3 className="text-violet-500 dark:text-violet-400 text-2xl font-semibold font-['Orbitron']">
                {it.num}
              </h3>
              <p className="text-gray-700 dark:text-white/70 mt-2 whitespace-pre-line">{it.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
