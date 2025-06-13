import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-between bg-gradient-to-br from-purple-700 via-purple-800 to-black text-white px-6 lg:px-20 py-16">
      {/* Görsel Alanı */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-[320px] h-[420px] bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
          <img
            src="/profil2.jpg"
            alt="profil2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Merhaba! Ben <span className="text-pink-400">Kerim</span> 👋
        </h1>
        <p className="text-xl font-light text-gray-300 mb-4">Backend Developer</p>
        <p className="text-gray-400 leading-relaxed max-w-xl mb-6">
          Güvenli, sürdürülebilir ve ölçeklenebilir sistemler geliştiriyorum.  
          Veritabanı yönetimi, RESTful API geliştirme ve yazılım mimarisi alanlarında deneyim sahibiyim.
          Java, Spring Boot ve PostgreSQL gibi teknolojilerle kurumsal çözümler üretiyor, projelerimi temiz ve optimize edilmiş kodlarla geliştiriyorum.
        </p>

        {/* Butonlar */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition font-medium shadow"
          >
            Projelerim
          </a>
          <a
            href="#contact"
            className="bg-white text-purple-700 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium shadow"
          >
            İletişim
          </a>
        </div>

        {/* Sosyal Medya */}
        <div className="mt-6 flex gap-6 text-2xl text-white">
          <a href="https://github.com/kerimtetik" className="hover:text-gray-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kerim-tetik-708168221/" className="hover:text-blue-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
