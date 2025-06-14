// src/components/Skills.jsx
import React from "react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDotnet,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={30} color="#f89820" />, level: 4 },
  { name: "Spring Boot", icon: <SiSpringboot size={30} color="#6DB33F" />, level: 3 },
  { name: "C#", icon: <SiDotnet size={30} color="#68217A" />, level: 3 },
  { name: "PostgreSQL", icon: <SiPostgresql size={30} color="#336791" />, level: 3 },
  { name: "Docker", icon: <FaDocker size={30} color="#0db7ed" />, level: 2 },
  { name: "Python", icon: <FaPython size={30} color="#3776ab" />, level: 4 },
  {
    name: "HTML & CSS",
    icon: (
      <div className="flex gap-1">
        <SiHtml5 size={25} color="#e34c26" />
        <SiCss3 size={25} color="#264de4" />
      </div>
    ),
    level: 3,
  },
  { name: "JavaScript", icon: <SiJavascript size={30} color="#f0db4f" />, level: 3 },
  { name: "React", icon: <FaReact size={30} color="#61DBFB" />, level: 2 },
];

const Skills = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
          Kullandığım Teknolojiler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 text-left w-full sm:w-auto">
                {skill.icon}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
              <div className="flex gap-1 justify-center sm:justify-end w-full sm:w-auto">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-sm ${
                      i < skill.level ? "bg-emerald-400" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
