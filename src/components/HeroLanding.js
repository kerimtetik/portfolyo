import React from "react";

const HeroLanding = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white px-6 md:px-12 lg:px-24 py-20">
      
      {/* Sol Metin Alanı */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
        <p className="uppercase tracking-wider text-gray-300 text-sm">
          Yazılım Geliştirici
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-4">
          Kerim Tetik <br />
          <span className="text-purple-300">Backend Developer</span>
        </h1>
        <p className="text-gray-400 font-light mt-4">
          Kişisel Web Sitesi
        </p>

        {/* Aşağı ok simgesi */}
        <div className="pt-10 animate-bounce text-3xl">
          <span>↓</span>
        </div>
      </div>

      {/* Sağ Görsel Alanı */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/profil.jpg"
          alt="profil"
          className="rounded-lg shadow-2xl w-[260px] sm:w-[300px] h-[360px] sm:h-[400px] object-cover transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default HeroLanding;
