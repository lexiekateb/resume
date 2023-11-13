
import { Button, Fab, formGroupClasses } from '@mui/material';
import {Box} from '@mui/material';
import React from 'react';
import { ArrowDropDown, FileDownload } from '@mui/icons-material';
import styles from './index.module.css';
import {styled} from '@mui/material/styles';

const Intro = () => {

  const onButtonClick = () => {
    const aboutMeElement = document.getElementById('aboutMe');
    aboutMeElement?.scrollIntoView({ behavior: 'smooth' });
  }

  const showpDF= (name:String) => {
    const pdf = require(`../../docs/${name}`);
    window.open(pdf);
  }

  const gitLink = () => {
    window.open('https://github.com/lexiekateb/resume', '_blank');
  }

  const StyledButton = styled(Button)({
      background: '#e7cac2',
      border: 0,
      borderRadius: 0,
      color: '#323232',
      textTransform: 'lowercase',
      height: 48,
      width: 'fit-content',
      padding: '0 30px',
      boxShadow: '1px 1px #959595',
      '&:hover': {
        backgroundColor: 'common.white'
      }
    });

    const CircleButt = styled(Button)({
      background: '#e7cac2',
      border: 0,
      borderRadius: 100,
      color: '#323232',
      textTransform: 'lowercase',
      height: 50,
      width: 50,
      padding: '0 30px',
      boxShadow: '1px 1px #959595',
      '&:hover': {
        backgroundColor: 'common.white'
      }      
    });

  return (
    <Box className={styles.realContainer} id="home">
      <Box className={styles.container}>
        <Box className={styles.wordContainer}>
          <div className={styles.title}>Hi, I'm Lexie.</div>
            <div className={styles.intro}>
              <p>I am a senior at the University of Oklahoma studying Computer Science and minoring in math. I am passionate about researching
              algorithmic bias and the ethics of artificial intelligence. I am also interested in the intersection of technology and society.</p>
              <p>In my free time time, you can catch me in a boxing studio getting a session in, reading a good historical fiction book in a coffee shop,
              or hanging out with my rescue dog Venti.</p>
            </div>
        </Box>

        <Box className={styles.imageContainer}>
            <img className={styles.profPic} src={require("./prof_pic.JPG")} alt="me!"/>
        </Box>

      </Box>
        <div className={styles.buttons}>
            <StyledButton onClick={() => showpDF('research.pdf')}>view research statement</StyledButton>
            <StyledButton onClick={() => showpDF('personal.pdf')}>view personal statement</StyledButton>
            <StyledButton onClick={() => gitLink()}>this website's repo</StyledButton>
        </div>
      <CircleButt className={styles.downButton} onClick={() => onButtonClick()}><ArrowDropDown/></CircleButt>
    </Box>
  );
};

export default Intro;
