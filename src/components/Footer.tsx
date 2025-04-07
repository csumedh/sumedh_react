import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/csumedh" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/sumedhchinchmalatpure" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/5umedhc/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <p>
        A portfolio built by <strong>Sumedh Chinchmalatpure</strong> with 💖
      </p>
    </footer>
  );
}

export default Footer;
