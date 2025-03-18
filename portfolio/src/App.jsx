import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
//import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import About from "./pages/About";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div id="app-container">
        {/* Navbar shows on every page */}
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Hero />} />
          {/* About Route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
