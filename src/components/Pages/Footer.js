import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './../styles/css/style.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p> 2023 copy</p>
        </div>
        
        <div className='footer-center'>
         <h4>Humble Abraham</h4>
          <p>Software Developer | AI Enthusiast</p>



        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <li>
              <a href="https://github.com/humblesmarts" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"> </i> 
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/humblesmarts" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"> </i>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/humblesmarts1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"> </i>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
