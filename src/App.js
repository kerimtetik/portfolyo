// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactButton from './components/ContactButton';
import HeroLanding from './components/HeroLanding';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300 relative">
        
        <ContactButton />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroLanding />
                <HeroSection />
                <Skills />                
                <Education />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
