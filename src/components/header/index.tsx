
import { Box } from '@mui/material';
import React from 'react';
import styles from './index.module.css';

const Header = () => {

    const scrollTo = ( element) => {
        const aboutMeElement = document.getElementById(element);
        aboutMeElement?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <Box className={styles.container}>
        <Box onClick={() => scrollTo('home')}>home</Box>
        <Box onClick={() => scrollTo('aboutMe')}>about me</Box>
        <Box onClick={() => scrollTo('research')}>research</Box>
        <Box onClick={() => scrollTo('resume')}>resume</Box>
        <Box onClick={() => scrollTo('contact')}>contact</Box>
    </Box>
  );
};

export default Header;
