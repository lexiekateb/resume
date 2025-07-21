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

export type Paper = {
    title: string,
    url: string
}

export const papers: Paper[] = [
    {
        title: "More and Scammier Ads: The Perils of YouTube's Ad Privacy Settings",
        url: "https://petsymposium.org/popets/2025/popets-2025-0169.pdf"
    },
]

export const resumeItems: ResumeItem[] = [
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
        title: "Autonomous Driving",
        startDate: 'Aug 2021',
        endDate: 'May 2022',
        description: "Partnered with the Mechanical Engineering department to enhance object detection for autonomous vehicles using OpenCV and Hough line detection, integrating the output with Lidar technology for collision avoidance."
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