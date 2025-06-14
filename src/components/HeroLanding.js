import React from "react";

const HeroLanding = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white px-8 md:px-16 lg:px-32 py-24">
      
      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
        <p className="text-teal-400 uppercase tracking-[.2em] text-sm font-mono">
          Backend Geliştirici
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mt-4 font-serif">
          Kerim Tetik
        </h1>
        <p className="text-xl mt-4 text-gray-300 font-light font-sans">
          Java, Spring Boot ve PostgreSQL kullanarak RESTful API'ler geliştiriyor; güvenli, ölçeklenebilir ve bakımı kolay arka uç sistemleri tasarlıyorum.
        </p>
      </div>

      {/* Daha Büyük Profil Görseli */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-[360px] sm:w-[440px] h-[340px] sm:h-[420px] rounded-xl overflow-hidden border-4 border-teal-500 shadow-2xl hover:scale-105 transition duration-700 ease-in-out">
          <img
            src="/profil.jpg"
            alt="Kerim Tetik Portre"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
