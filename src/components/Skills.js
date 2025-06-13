import React from "react";

const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 5 },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 5 },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 4 },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 4 },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 4 },
  { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 4 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 3 },
];

const Skills = () => {
  return (
    <div className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold text-indigo-800 mb-10">Yeteneklerim</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-between items-center bg-indigo-50 rounded-lg px-6 py-4 shadow-md"
          >
            <div className="flex items-center gap-4">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-sm ${
                    i < skill.level ? "bg-indigo-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
