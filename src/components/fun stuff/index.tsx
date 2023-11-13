
import { Box, Button, MobileStepper, Paper, Typography } from '@mui/material';
import React from 'react';
import {images} from '../../data'
import styles from './index.module.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FunStuff: React.FC = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
        
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
  return (
    <Box>
        <Box className={styles.funFactsWrapper}>
            <Box className={styles.card}>
                <Box className={styles.cardTitle}>The Fun Stuff!</Box>
                <ul>
                    <li>My partner is Japanese, and last year I got to spend a month in Japan!</li>
                    <li>I was a collegiate powerlifter for 2 years! Now, I've gotten into boxing.</li>
                    <li>I love historial fiction. A few of my favorites are <i>The Book Theif</i>, <i>Babel</i>, and <i>The Nightingale</i>.</li>
                    <li>Venti is my rescue dog. She was an impulse decision sophomore year, but I don't know what I'd do without her.</li>
                    <li>I am a coffee snob. I have a espresso machine and my favorite drink is a brown sugar shaken espresso!</li>
                    <li>My mom is my best friend.</li>
                </ul>
            </Box>
        </Box>

        <Box className={styles.imagesWrapper}>
                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
            </Box>
        </Box>
    </Box>
  );
};

export default FunStuff;
