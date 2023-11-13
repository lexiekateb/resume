
import { Box, Rating } from '@mui/material';
import React from 'react';
import styles from './index.module.css';
import { styled } from '@mui/material/styles';
import { SkillItem } from '../../data';

interface AboutMeProps {
  skillItems: SkillItem[];
}

const AboutMe: React.FC<AboutMeProps> = ({skillItems}) => {

  const StyledRating = styled(Rating) ({
    '& .MuiRating-iconFilled': {
        color: '#bacabe'
    },
    '& .MuiRating-iconHover': {
        color: '#bacabe'
    },
  }); 

  return (
    <Box  className={styles.bigContainer} id="aboutMe">
      <Box className={styles.title}>About Me!</Box>

      <Box className={styles.container} >
        <Box className={styles.card}>
        
          <Box className={styles.content}>University of Oklahoma, B.S</Box>
          <Box className={styles.text}>
            <Box>Computer Science, Minor in Mathematics</Box>
            <Box><i>2020-2024</i></Box>
            <Box><i>3.76 GPA</i></Box>
          </Box>

            <Box className={styles.content}>Honors/Awards</Box>
            <Box className={styles.text}>
              <ul>
                <li>National Merit Scholar</li>
                <li>Diversity and Inclusion Scholar</li>
                <li>Engineering Royalty</li>
                <li>Dorothy Grade Barkow Scholar</li>
                <li>Charles and Jean Smith Scholar</li>
              </ul>
            </Box>
        </Box>


        <Box className={styles.card}>
          <Box className={styles.content}>Skills</Box>

          <Box className={styles.text}>
            {skillItems.map((item, index) => (
              <Box className={styles.skill}>
                  <h4>{item.title}</h4>
                  <StyledRating readOnly value={item.rating} max={10}/>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default AboutMe;
