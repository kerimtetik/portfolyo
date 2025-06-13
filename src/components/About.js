import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300 mb-6">
          Hakkımda
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Merhaba! Ben Kerim. Web tabanlı yazılım geliştirme alanında
          uzmanlaşmış bir <span className="font-semibold">Backend Developer</span>'ım.
          Java (Spring Boot), Python (Flask), PostgreSQL gibi teknolojilerle
          çalışıyorum. Aynı zamanda görüntü işleme, blockchain ve modern
          web teknolojileriyle ilgileniyorum. Yazılımda temiz kod, sürdürülebilir
          yapı ve kullanıcı deneyimi önceliklerim arasında.
        </p>
      </div>
    </div>
  );
};

export default About;
