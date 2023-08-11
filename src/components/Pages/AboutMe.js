import React from 'react';
// Import your CSS for styling
import './../styles/css/style.css';


const AboutMe = () => {
  return (
    <section className="about">
       <div className="about-page">
      <div className="profile-section">
        <div className="profile-image"></div>
        <h1>Humble W. Abraham </h1>
        <p>Software Developer</p>
      </div>
        
      <div className="bio-section">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with over 10 years of experience in building
          complex applications that solve real-world problems. My expertise includes
          full-stack development, software architecture, and mentoring junior developers.
        </p>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Bootstrap</li>
          <li>MySQL</li>
          <li>Postgresql</li>
          <li>RESTful APIs</li>
          <li>Django Framework</li>
        </ul>
      </div>
    </div>
 
    </section>
  );
};

export default AboutMe;

