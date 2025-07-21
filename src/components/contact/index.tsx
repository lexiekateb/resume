import React from 'react';

import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div id="contact">
      <Box>
        <Box className={styles.title}>Let's get In Touch!</Box>

        <Box className={styles.socials}>
          <a href="mailto:lb4535@nyu.edu">
            <FontAwesomeIcon color='#e7cac2' size='4x' icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/lexie-matsumoto/" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='4x' icon={faLinkedin} />
          </a>
          {/* <a href="https://www.instagram.com/lexiebarthelemess/" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='2x' icon={faInstagram} />
          </a> */}
          <a href="https://www.github.com/lexiekateb" target='_blank'>
            <FontAwesomeIcon color='#e7cac2' size='4x' icon={faGithub} />
          </a>
        </Box>

      </Box>
    </div>
  );
};

export default Contact;
