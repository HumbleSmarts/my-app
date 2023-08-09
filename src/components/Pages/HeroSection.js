import React from "react";
import './styles/css/HeroSection.css'; // Import your CSS for styling
import profilepicture from './styles/image/profile-picture.JPG'; // Tell webpack this JS file uses this image


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
      <div className="profile-picture-container">
      {/* Import result is the URL of your image */}
        <img
          src={profilepicture}
          alt="Software Engineer"
          className="profile-picture"
        />  
      </div>

      <div className="engineer-info">
        <h1 className="engineer-name">Humble W. Abraham</h1>
        <p className="tagline"> Software Engineer</p>
      </div>
    </div>
    </section>
  );
};

// function HeroSection() {
//     return <div className="hero-section">
//     <div className="hero-content">
//       <div className="profile-picture-container">
//       {/* Import result is the URL of your image */}
//         <img
//           src={profilepicture}
//           alt="Software Engineer"
//           className="profile-picture"
//         />  
//       </div>
//       <div className="engineer-info">
//         <h1 className="engineer-name">Humble W. Abraham</h1>
//         <p className="tagline"> Software Engineer</p>
//       </div>
//     </div>
//   </div>

// }

export default HeroSection;