import React from "react";

const HeroLanding = () => {
  return (
    <section className="min-h-screen flex items-center justify-between bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white px-6 lg:px-24 py-20">
      {/* Sol Metin Alanı */}
      <div className="flex-1 space-y-6">
        <p className="uppercase tracking-wider text-gray-300 text-sm">Yazılımın ustası</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Kerim Tetik <br />
          <span className="text-purple-300">Backend Developer</span>
        </h1>
        <p className="text-gray-400 font-light">PORTFOLYO</p>

        {/* Aşağı ok simgesi */}
        <div className="pt-10 animate-bounce">
          <span className="text-3xl">↓</span>
        </div>
      </div>

      {/* Sağ görsel alanı */}
      <div className="flex-1 hidden lg:flex justify-center items-center">
        <img
          src="/profil.jpg" // 📂 public klasörüne 'profil.jpg' dosyasını yerleştirmeyi unutma
            alt="profil"
          className="rounded-lg shadow-2xl w-[300px] h-[400px] object-cover transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default HeroLanding;
