// src/components/Skills.js
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
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Kullandığım Teknolojiler</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-sm ${
                      i < skill.level ? "bg-pink-500" : "bg-gray-600"
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
