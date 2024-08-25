import React from 'react';
import profileImage from '../assets/images/IMG02.jpg'; 
import resume from '../assets/Resume.pdf';

function Header() {
  return (
    <header>
      <img src={profileImage} alt="Profile" className="header-image" />
      <h1>Shailendra Sekhar Bathula</h1>
      <h2>AI Researcher</h2>
      <a href={resume} download className="download-button">Resume</a>
      <nav>
        <ul>
          {/* <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
