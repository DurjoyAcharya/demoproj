import React from 'react';
import Logo from './Logo';
import './css/Header.css';
const AwessomeHeader = () => {
  return (
      <header className="header">
      <nav className="navbar">
        <Logo/>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default AwessomeHeader;
