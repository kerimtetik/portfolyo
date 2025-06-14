// src/components/HeroSection.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-10 md:px-20 lg:px-32 py-24 font-serif">

      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          Selam, ben <span className="text-teal-400">Kerim Tetik</span>
        </h1>
        <p className="text-xl text-gray-300 font-light mb-6">
          Yazılım geliştirmeyi seven ve kendini bu alanda sürekli geliştirmeye çalışan biriyim.
        </p>
        <p className="text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-base">
          Geliştirdiğim sistemlerde verimlilik, güvenlik ve sürdürülebilirlik temel önceliklerimdir. Java ve Spring Boot gibi teknolojilerle arka uç servisler geliştiriyor, PostgreSQL gibi güçlü veritabanlarıyla veri yönetimini üstleniyorum. Kod yazarken yalnızca bugünü değil, geleceği de düşünüyorum.
        </p>

        {/* Sosyal Medya */}
        <div className="mt-10 flex justify-center lg:justify-start gap-8 text-3xl">
          <a
            href="https://github.com/kerimtetik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
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
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="w-[260px] sm:w-[320px] h-[320px] sm:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-teal-600">
          <img
            src="/profil2.jpg"
            alt="Kerim Tetik Portre"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;