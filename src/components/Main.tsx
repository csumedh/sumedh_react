import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import myPhoto from '../assets/images/sumedh.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={myPhoto} alt="Sumedh" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/csumedh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumedhchinchmalatpure" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/5umedhc/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
          <h1>Sumedh Chinchmalatpure</h1>
          <p>Robotics Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/csumedh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumedhchinchmalatpure" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/5umedhc/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;