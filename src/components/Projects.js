import React from "react";

const projects = [
  {
    title: "E-Ticaret Gözlük Sitesi",
    description:
      "Spring Boot ve PostgreSQL ile geliştirilen tam işlevsel bir gözlük satış web uygulaması.",
    link: "https://github.com/kullanici/e-ticaret-proje", // isteğe bağlı
  },
  {
    title: "Blockchain Tabanlı Harcama Takip Sistemi",
    description:
      "Topluluk harcamalarını şeffaf bir şekilde takip eden React + Flask tabanlı sistem.",
    link: "https://github.com/kullanici/blockchain-harcama-takip",
  },
  {
    title: "Plaka Tanıma Sistemi (YOLOv8)",
    description:
      "Görüntü işleme ve derin öğrenme kullanarak araç plakası tanıma uygulaması.",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300 mb-10">
        Projelerim
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                className="text-sm text-indigo-500 dark:text-indigo-300 underline mt-3 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub'da Görüntüle
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
