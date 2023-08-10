import React from 'react';
import './../styles/css/index.css'; // Import your CSS for styling
import profilepicture from './../styles/image/profile-picture.JPG'; // Tell webpack this JS file uses this image


const Home = () => {
	return (
			  <section >
				<div className="hero-section">
				<div className="hero-content">
				<div className="profile-picture-container">
				{/* Import result is the URL of your image */}
				  <img
					src={profilepicture}
					alt="Software Engineer"
					className="profile-picture"
				  />  
				</div>
			  </div>


			  	<div className="engineer-info">
				  <h1 className="engineer-name">Humble W. Abraham</h1>
				  <p className="tagline"> Software Engineer</p>
				  <p className="detail"> I'm a passionate software developer with over 5 years of experience in building
											complex applications that solve real-world problems. My expertise includes
											full-stack development, software architecture, and mentoring junior developers.</p>
				</div>
				</div>
				
			  </section>
			  

			
			);
		  };

export default Home;