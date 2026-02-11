import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiDotnet,
  SiTailwindcss,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const skillGroups = [
    {
      title: t("Languages"),
      items: [
        { name: "Java", icon: <FaJava size={26} color="#f89820" />, level: 4 },
        { name: "C#", icon: <SiDotnet size={26} color="#512BD4" />, level: 3 },
        { name: "Python", icon: <FaPython size={26} color="#3776AB" />, level: 4 },
        { name: "JavaScript", icon: <SiJavascript size={26} color="#F7DF1E" />, level: 3 },
        {
          name: "HTML & CSS",
          icon: (
            <div className="flex gap-1">
              <FaHtml5 size={24} color="#E34F26" />
              <FaCss3Alt size={24} color="#1572B6" />
            </div>
          ),
          level: 3,
        },
      ],
    },
    {
      title: t("Frameworks & Libraries"),
      items: [
        { name: "React", icon: <FaReact size={26} color="#61DAFB" />, level: 4 },
        { name: "Spring Boot", icon: <SiSpringboot size={26} color="#6DB33F" />, level: 4 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={26} color="#38BDF8" />, level: 3 },
      ],
    },
    {
      title: t("Tools & Databases"),
      items: [
        { name: "Docker", icon: <FaDocker size={26} color="#0db7ed" />, level: 3 },
        { name: "Git / GitHub", icon: <SiGit size={26} color="#F1502F" />, level: 4 },
        { name: "Postman", icon: <SiPostman size={26} color="#FF6C37" />, level: 4 },
        { name: "PostgreSQL", icon: <SiPostgresql size={26} color="#336791" />, level: 4 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-50 dark:bg-[#0a0612] border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      {/* neon background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,.1),transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <motion.h2
          className="text-5xl font-['Orbitron'] text-center text-gray-900 dark:text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,.45)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        {t("Skills & Proficiency")}
        </motion.h2>

        <div className="space-y-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-['Orbitron'] text-center text-violet-500 dark:text-violet-400 mb-8">
                {group.title}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {group.items.map((s, j) => (
                  <div
                    key={j}
                    className="relative flex items-center justify-between rounded-2xl p-5 border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md hover:border-violet-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition"
                  >
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 via-pink-400 to-transparent rounded-l-lg" />

                    <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                      {s.icon}
                      <span className="font-['Orbitron'] text-sm">{s.name}</span>
                    </div>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((box, idx) => (
                        <div
                          key={idx}
                          className={`w-3.5 h-3.5 rounded-sm transition ${
                            idx < s.level
                              ? "bg-violet-500 dark:bg-violet-400"
                              : "bg-gray-300 dark:bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
