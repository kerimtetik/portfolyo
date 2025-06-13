import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Tanıtım yazısı */}
        <div className="text-left lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Merhaba! Ben <span className="text-pink-400">Kerim</span> 👋
          </h1>
          <p className="text-2xl mt-4 font-light text-gray-200">
            Backend Developer
          </p>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
            Backend Developer olarak; güvenli, sürdürülebilir ve ölçeklenebilir sistemler geliştiriyorum.  
            Veritabanı yönetimi, RESTful API geliştirme ve yazılım mimarisi alanlarında deneyim sahibiyim.
            Java, Spring Boot ve PostgreSQL gibi teknolojilerle kurumsal çözümler üretiyor, projelerimi temiz ve optimize edilmiş kodlarla geliştiriyorum.
          </p>

          {/* Butonlar */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition font-medium shadow-md"
            >
              Projelerim
            </a>
            <a
              href="#contact"
              className="bg-white text-purple-700 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium shadow-md"
            >
              İletişim
            </a>
          </div>

          {/* Sosyal ikonlar */}
          <div className="mt-6 flex gap-5 text-2xl text-white">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-blue-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Profil Fotoğrafı */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/profil.jpg" // 📂 public klasörüne 'profil.jpg' dosyasını yerleştirmeyi unutma
            alt="profil"
            className="w-48 h-48 rounded-full border-4 border-white shadow-lg hover:scale-105 transition duration-300 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
