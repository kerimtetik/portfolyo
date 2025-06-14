import React from "react";

const educationData = [
  {
    school: "Turgut Özal Anadolu Lisesi",
    degree: "Lise",
    year: "2016 - 2020",
    note: "88/100",
  },
  {
    school: "İnönü Üniversitesi",
    degree: "Bilgisayar Mühendisliği (Lisans)",
    year: "2021 - 2025",
    note: "3.03 / 4.00",
  },
];

const language = {
  school: "Yabancı Dil",
  degree: "İngilizce",
  year: "Seviye",
  note: "B1 - Orta Seviye",
};

const Education = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
          Eğitim Bilgilerim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[...educationData, language].map((edu, index) => (
            <div
              key={index}
              className="bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-2">
                {edu.school}
              </h3>
              <p className="text-base font-medium mb-1">{edu.degree}</p>
              <p className="text-sm text-gray-400 mb-1">{edu.year}</p>
              <p className="text-sm text-gray-400">{edu.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
