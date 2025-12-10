import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Nri from "./components/Nri";
import Carrers from "./components/Carrers";
import Contact from "./components/Contact";
import Gallery from "./components/Resources/Gallery";
import Blog from "./components/Resources/Blog";
import Media from "./components/Resources/Media";


function App() {
  return (
    <Router>
      <ScrollToTop />
       <Navbar />
      <Routes>
        {/* Default home route */}
        <Route path="/" element={<Home />} />

        {/* Extra route if someone visits /home */}
        <Route path="/home" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

          {/* Project page */}
        <Route path="/project" element={<Project />} />

        {/* Nri page */}
        <Route path="/nri" element={<Nri/>} />
        
         {/*Carrers page */}
        <Route path="/carrers" element={<Carrers/>} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact/>} />
        
       {/* Resources sub-pages */}
    <Route path="/resources/gallery" element={<Gallery />} />
    <Route path="/resources/blog" element={<Blog />} />
    <Route path="/resources/media" element={<Media />} />


        {/* Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
