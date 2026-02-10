import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/Scroll/ScrollToTop";




import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
