import React from "react";

const educationList = [
  {
    school: "Gümüşhane Üniversitesi",
    degree: "Yazılım Mühendisliği",
    year: "2019 - 2023",
  },
  {
    school: "Atatürk Anadolu Lisesi",
    degree: "Sayısal",
    year: "2015 - 2019",
  },
];

const Education = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-indigo-800 mb-10">Eğitim</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              {edu.school}
            </h3>
            <p className="text-gray-600">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
