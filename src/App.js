// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import HeroLanding from './components/HeroLanding';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <HeroLanding />
      <HeroSection />
      <Skills />
      <Education />
      <Projects />           
    </div>
  );
}

export default App;
