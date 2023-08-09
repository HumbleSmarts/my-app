import React from "react";
import profilepicture from './image/profile-picture.JPG';



function Body() {
    return <div className="hero-section">
    <div className="hero-content">
      <div className="profile-picture-container">
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
  </div>

}

export default Body;