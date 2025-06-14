import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-br from-purple-700 via-purple-800 to-black text-white px-6 md:px-12 lg:px-20 py-16">
      
      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Merhaba! Ben <span className="text-pink-400">Kerim</span> 👋
        </h1>
        <p className="text-lg sm:text-xl font-light text-gray-300 mb-4">
          Backend Developer
        </p>
        <p className="text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 px-2 sm:px-0">
          Güvenli, sürdürülebilir ve ölçeklenebilir sistemler geliştiriyorum.  
          Veritabanı yönetimi, RESTful API geliştirme ve yazılım mimarisi alanlarında deneyim sahibiyim.
          Java, Spring Boot ve PostgreSQL gibi teknolojilerle kurumsal çözümler üretiyor, projelerimi temiz ve optimize edilmiş kodlarla geliştiriyorum.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/kerimtetik?tab=repositories" // GitHub repo linkini buraya yaz
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition font-medium shadow text-center"
              >
                Projelerim
              </a>

              <a
                href="/contact" // Contact sayfası için yönlendirme
                className="bg-white text-purple-700 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium shadow text-center"
              >
                İletişim
              </a>
</div>

        {/* Sosyal Medya */}
        <div className="mt-6 flex justify-center lg:justify-start gap-6 text-2xl text-white">
          <a
            href="https://github.com/kerimtetik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kerim-tetik-708168221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Görsel Alanı */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <div className="w-[260px] sm:w-[300px] h-[360px] sm:h-[420px] bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
          <img
            src="/profil2.jpg"
            alt="profil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
