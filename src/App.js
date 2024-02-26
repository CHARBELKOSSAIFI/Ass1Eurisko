
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home,About,Contact,Projects} from './pages';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

// an undefineddd errorrr  i dont know whyy, but im defined it 
//scope


export const NavBar = () =>{
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header1">
      <div className="headerDiv">
        <a href="/" className="Portfolio">My Portfolio</a>   
        <nav className="nav">
          <div className="menu" 
          onClick={() =>{
             setMenuOpen(!menuOpen);
           }}
           >
            <span></span>
            <span></span>
            <span></span>
            </div> 
          <ul className={menuOpen ? "open" : ""} >

            <li><a href="/home" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About Me</a></li>
            <li><a href="/projects" className="nav-link">Projects</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
