import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] transition-colors duration-500 border-t border-gray-200 dark:border-white/5"
    >
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-12 gap-10 items-center">
        {/* SOL TARAF: BAŞLIK ve METİN */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-['Orbitron'] text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,.45)]">
            {t("aboutTitle")}
          </h2>

          <p className="text-gray-700 dark:text-white/80 leading-relaxed whitespace-pre-line">
            {t("aboutText")}
          </p>
        </motion.div>

        {/* SAĞ TARAF: KUTULAR */}
        <motion.div
          className="md:col-span-6 grid sm:grid-cols-3 gap-6 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { num: "77", text: "ALES" },
            {
              num: "3.03 / 4.00",
              text: `İnönü Üniversitesi\nBilgisayar Mühendisliği (Lisans)\n2021 – 2025`,
            },
            { num: "B1", text: "İngilizce Seviyesi" },
          ].map((it, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 backdrop-blur-md shadow-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
              <h3 className="text-violet-500 dark:text-violet-400 text-2xl font-semibold font-['Orbitron']">
                {it.num}
              </h3>
              <p className="text-gray-700 dark:text-white/80 mt-2 whitespace-pre-line">
                {it.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
