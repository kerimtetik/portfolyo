import React from "react";

const techs = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const Technologies = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-800 mb-10">Kullandığım Teknolojiler</h2>
      <div className="flex flex-wrap justify-center gap-8 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl mx-auto max-w-5xl">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center w-24">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <span className="text-sm font-medium text-gray-800">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
