import React from 'react';
import { ResearchItem } from '../../data';
import styles from './index.module.css';
import { Box } from '@mui/material';

interface ResearchSectionProps {
    researchItems: ResearchItem[];
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ researchItems }) => {
    return (
        <Box className={styles.research} id="research">
            <Box className={styles.title}>Research Experiences</Box>
            <div className={styles.container}>
                {researchItems.map((item, index) => (
                    <Box className={styles.researchCard} key={index}>
                        <Box className={styles.header}>{item.title} </Box>
                            <Box className={styles.desc}>
                                <i>{item.startDate} - {item.endDate}</i>
                                <br />
                                <Box>{item.description}</Box>
                            </Box>
                    </Box>
                ))}
            </div>
        </Box>
    )
};


export default ResearchSection;
