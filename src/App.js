// src/App.js
import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <DarkModeToggle />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
