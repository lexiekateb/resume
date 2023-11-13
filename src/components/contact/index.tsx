import React from 'react';

import {
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';

const Contact = () => {
  return (
    <div id="contact">
      <Box>
        <Box className={styles.title}>Let's get In Touch!</Box>

        <Box>Email: lexieb@ou.edu</Box>

        <Box className={styles.socials}>
          <a href="https://www.linkedin.com/in/lexie-barthelemess-10a86b18a" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='2x' icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/lexiebarthelemess/" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='2x' icon={faInstagram} />
          </a>
          <a href="https://www.github.com/lexiekateb" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='2x' icon={faGithub} />
          </a>
        </Box>

      </Box>
    </div>
  );
};

export default Contact;
