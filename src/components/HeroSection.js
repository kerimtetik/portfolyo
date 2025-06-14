import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-10 md:px-20 lg:px-32 py-24 font-serif">

      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Selam, ben <span className="text-teal-400">Kerim Tetik</span>
        </h1>
        <p className="text-xl text-gray-300 font-light mb-6">
          Yazılım geliştirmeyi seven ve kendini bu alanda sürekli geliştirmeye çalışan biriyim.
        </p>
        <p className="text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-base">
          Yazılım geliştirme sürecinde öğrenmeye açık bir şekilde ilerliyorum. Java ve Spring Boot ile arka uç servisler üzerinde çalışıyor, PostgreSQL ile temel veritabanı işlemlerini yönetiyorum. Amacım her geçen gün kendimi biraz daha geliştirmek.
        </p>
      </div>

      {/* Görsel Alanı (karesel yapı) */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="w-[300px] sm:w-[360px] h-[360px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-teal-600 hover:scale-105 transition duration-700 ease-in-out">
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
