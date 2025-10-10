import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactBlock from "./components/ContactBlock";
import Footer from "./components/Footer";

function App() {
  return (
<Router future={{ v7_relativeSplatPath: true }}>
  <div className="bg-[#070b13] min-h-screen text-white scroll-smooth">
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <ContactBlock />
            <Footer />
          </>
        }
      />
    </Routes>
  </div>
</Router>
  );
}

export default App;
