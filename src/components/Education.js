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
    note: "3.03/4.00",
  },
];

const language = {
  dil: "İngilizce",
  seviye: "B1 - Orta Seviye",
};

const Education = () => {
  return (
    <section className="bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Eğitim</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold text-pink-400">{edu.school}</h3>
              <p className="text-lg">{edu.degree}</p>
              <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
              <p className="text-sm text-gray-400">Not Ortalaması: {edu.note}</p>
            </div>
          ))}

          {/* Dil seviyesi */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-left">
            <h3 className="text-2xl font-semibold text-pink-400">Yabancı Dil</h3>
            <p className="text-lg">{language.dil}</p>
            <p className="text-sm text-gray-400">Seviye: {language.seviye}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
