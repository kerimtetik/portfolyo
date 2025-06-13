// src/components/Skills.js
import React from "react";
import { FaJava, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiCsharp } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6DB33F" /> },
  { name: "C#", icon: <SiCsharp size={40} color="#68217A" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { name: "Docker", icon: <FaDocker size={40} color="#0db7ed" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776ab" /> },
  { name: "HTML & CSS", icon: (
    <div className="flex gap-1">
      <SiHtml5 size={35} color="#e34c26" />
      <SiCss3 size={35} color="#264de4" />
    </div>
  ) },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#f0db4f" /> },
  { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Kullandığım Teknolojiler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
