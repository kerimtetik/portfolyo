// src/components/HeroLanding.jsx
import React from "react";

const HeroLanding = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white px-8 md:px-16 lg:px-32 py-24">

      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
        <p className="text-teal-400 uppercase tracking-[.2em] text-sm font-mono">
          Full Stack Geliştirici
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mt-4 font-serif">
          Kerim Tetik
        </h1>
        <p className="text-xl mt-4 text-gray-300 font-light font-sans">
          Yazılım geliştirme tutkumu, kullanıcı odaklı arayüzler ve performansı yüksek sistemlerle birleştirerek; sadece bugünü değil, geleceği de inşa eden dijital çözümler üretiyorum.
        </p>
      </div>

      {/* Profil Görseli (Dikdörtgen) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/profil.jpg"
          alt="Kerim Tetik Portre"
          className="rounded-lg border-4 border-teal-500 shadow-xl w-[300px] sm:w-[380px] h-[280px] sm:h-[300px] object-cover hover:scale-105 transition duration-700 ease-in-out"
        />
      </div>
    </section>
  );
};

export default HeroLanding;
