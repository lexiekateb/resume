import React from 'react';
import { Paper } from '../../data';
import styles from './index.module.css';
import { Box } from '@mui/material';

interface PaperSectionProps {
    papers: Paper[];
}

const PaperSection: React.FC<PaperSectionProps> = ({ papers }) => {
    return (
        <Box className={styles.research} id="papers">
            <Box className={styles.title}>Papers</Box>
            <div className={styles.container}>
                <Box className={styles.researchCard}>
                <Box className={styles.desc}>
                    {papers.map((item, index) => (
                        <React.Fragment key={index}>
                            <Box className={styles.header}>{item.title}</Box>
                            <Box>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.url}
                                </a>
                            </Box>
                            <br />
                        </React.Fragment>
                    ))}
                    </Box>
                </Box>
            </div>
        </Box>
    )
};


export default PaperSection;
