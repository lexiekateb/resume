
import React from 'react';
import { ResumeItem } from '../../data';
import { Box } from '@mui/material';
import styles from './index.module.css';

interface ResumeSectionProps {
    resumeItems:ResumeItem[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ resumeItems }) => {

    

    return (
        <div className={styles.resume} id="resume">

            <Box className={styles.title}>Work Experiences</Box>
            <Box className={styles.container}>
                {resumeItems.map((item, index) => (
                    <Box className={styles.researchCard} key={index}>
                        <Box className={styles.header}>{item.title}</Box>

                        <Box className={styles.desc}>
                            <Box><i>{item.startDate} - {item.endDate}</i></Box>
                            <Box><i>{item.location} -  {item.company}</i></Box>
                            <p>{item.description}</p>
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    )
};


export default ResumeSection;
