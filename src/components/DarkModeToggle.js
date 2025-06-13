// src/components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow"
    >
      {darkMode ? '☀️ Aydınlık' : '🌙 Karanlık'}
    </button>
  );
};

export default DarkModeToggle;
