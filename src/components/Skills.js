import React from "react";

const skills = [
  { name: "Java", level: "90%" },
  { name: "Spring Boot", level: "85%" },
  { name: "C#", level: "70%" },
  { name: "PostgreSQL", level: "80%" },
  { name: "Docker", level: "60%" },
  { name: "Python", level: "75%" },
  { name: "HTML & CSS", level: "95%" },
  { name: "JavaScript", level: "88%" },
  { name: "React", level: "85%" },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Kullandığım Teknolojiler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="h-full bg-pink-500 transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-sm text-right mt-2 text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
