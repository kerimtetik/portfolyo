
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Skills from "./components/Skills";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/yetenekler" element={<Skills />} />
          <Route path="/deneyimler" element={<Experience />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;