export type ResumeItem = {
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    description: string
}

export type ResearchItem = {
    title: string,
    startDate: string,
    endDate: string,
    description: string
}

export type SkillItem = {
    title: string,
    rating: number
}

export const resumeItems: ResumeItem[] = [
    {
        title: "PhD Student",
        company: "Tandon School of Engineering, New York University",
        location: "Brooklyn, NY",
        startDate: "Aug 2024",
        endDate: "Current",
        description: "Pursuing a PhD in Computer Science with the Cybersecurity for Democracy lab, focusing on ad transparency and child safety on social media."
    },
    {
        title: "Software Engineering Intern",
        company: 'Heartland Payment Systems',
        location: 'OKC, OK',
        startDate: 'May 2023',
        endDate: 'May 2024',
        description: "Led a project enabling executives to edit web pages via React, integrating with Snowflake databases and APIs to streamline updates."
    },
    {
        title: "Data Analytics Intern",
        company: 'Chickasaw Nation Industries',
        location: 'Norman, OK',
        startDate: 'Aug 2022',
        endDate: 'May 2023',
        description: "Handled data analytics tasks, creating reports using PowerBI and managing Microsoft SQL Server and Powershell."
    },
    {
        title: "Premier Software Engineering Intern",
        company: 'Tinker Air Force Base',
        location: 'Midwest City, OK',
        startDate: 'May 2022',
        endDate: 'Aug 2022',
        description: "Developed tests for production code and completed web projects using JavaScript, HTML/CSS, and APIs within an Agile framework."
    }
];


export const researchItems: ResearchItem[] = [
    {
        title: "TikTok Polarization",
        startDate: 'Aug 2024',
        endDate: 'Current',
        description: "I am part of a research group analyzing trends in content volume and polarization on TikTok, focusing on how the platform amplifies divisive topics and their broader impact on user engagement."
    },
    {
        title: "Sparse Model Graphing",
        startDate: 'Aug 2023',
        endDate: 'May 2024',
        description: "Collaborated as an undergraduate researcher with a PhD student to develop an interactive front-end for a program that visualizes variable graphs produced by a high-accuracy (98%) Graph Neural Network-based classifier for sparse matrix detection."
    },
    {
        title: "Reinforcement Learning",
        startDate: 'Aug 2022',
        endDate: 'Aug 2023',
        description: "Worked with a team to explore reinforcement learning using PyTorch, q-tables, and the Bellman equation. Trained a model to play tic-tac-toe against itself, resulting in an efficient player that consistently performed at a high level."
    },
    {
        title: "Autonomous Driving",
        startDate: 'Aug 2021',
        endDate: 'May 2022',
        description: "Partnered with the Mechanical Engineering department to enhance object detection for autonomous vehicles using OpenCV and Hough line detection, integrating the output with Lidar technology for collision avoidance."
    },
    {
        title: "NASA L'SPACE Program",
        startDate: 'Sep 2020',
        endDate: 'Jan 2021',
        description: "Participated in NASA’s L'SPACE program, collaborating with experts and peers to propose a deionizing airlock system designed to reduce moon dust contamination in astronaut living areas."
    },
    {
        title: "OU Data Analytics Lab",
        startDate: 'Jan 2021',
        endDate: 'May 2021',
        description: "Assisted a PhD researcher in studying Simpson's paradox and its implications for data interpretation, aiming to identify misuse that could lead to misleading conclusions in public datasets."
    },
];

  

export const skillItems:SkillItem[] = [
    {
        title: "React",
        rating: 9
    },
    {
        title: "TypeScript",
        rating:8,
    },
    {
        title: "R",
        rating: 8,
    },
    {
        title: 'C',
        rating: 7,
    },
    {
        title: 'SQL',
        rating: 7,
    },
    {
        title: 'Pytorch',
        rating: 6
    }
];

export const images = [
    {
        label: 'Me and my partner in Japan!',
        imgPath: './images/japan.jpg'
    },
    {
        label: 'Venti in her Halloween costume',
        imgPath: './images/hotdog.jpg'
    },
    {
        label: 'University of Oklahoma Powerlifting Team',
        imgPath: './images/lifting.jpg'
    }, 
    {
        label: 'I was nominated to engineering royalty, and got to be in the homwcoming parade!',
        imgPath: './images/royalty.jpg'
    },
    {
        label: 'Me and my bff',
        imgPath: './images/venti.jpg'
    },
    {
        label: 'Enjoying some sunlight and espresso',
        imgPath: './images/coffee.png'
    }
]