import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t("experiences", { returnObjects: true }) || [];

  return (
    <section
      id="experience"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] transition-colors duration-500"
    >
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-12 gap-10 relative z-10">
        {/* LEFT TITLE */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Orbitron'] text-5xl sm:text-6xl leading-tight text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(168,85,247,.45)]">
            {t("experienceTitle", { defaultValue: "Deneyimler" })}
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-md">
            {t("experienceIntro", {
              defaultValue:
                "Gerçek ürünlerde uçtan uca sorumluluk aldığım projelerden seçili başlıklar.",
            })}
          </p>
        </motion.div>

        {/* RIGHT EXPERIENCE TIMELINE */}
        <motion.div
          className="md:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md shadow-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company} • {exp.period}
              </p>

              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
