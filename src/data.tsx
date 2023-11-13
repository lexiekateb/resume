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

export const resumeItems:ResumeItem[] = [
    {
        title: "Software Engineering Intern",
        company: 'Heartland Payment Systems',
        location: 'OKC, OK',
        startDate: 'May 2022',
        endDate: 'Current',
        description: "I head a project that would allow Heartland executives to view and edit various website pages throughout Heartland's many services, allowing them to make changes without having to go through the development team, saving both groups time. I used React to create the frontend of the project and integreated in with exsiting Snowflake databases and API's to allow these changes to be made."
    },
    {
        title: "Data Analytics Intern",
        company: 'Chickasaw Nation Industries',
        location: 'Norman, OK',
        startDate: 'Aug 2022',
        endDate: 'May 2022',
        description: "I assisted in Data Analytics and Software Engineering work, including but not limited to proficiency in PowerBI, Microsoft SQL Server Management, and Powershell. My main duties were to create detailed reports using PowerBI technology."
    },
    {
        title: "Premier Software Engineering Intern",
        company: 'Tinker Air Force Base',
        location: 'Midwest City, OK',
        startDate: 'May 2021',
        endDate: 'Aug 2021',
        description: "Wrote tests for existing production code to ensure the dependability of current systems. Participated in the Agile framework to complete many web development projects using JavaScript, HTML/CSS, and APIs."
    },
    {
        title: "Resident Advisor (RA)",
        company: 'University of Oklahoma',
        location: 'Norman, OK',
        startDate: 'Aug 2021',
        endDate: 'Oct 2022',
        description: "I was a residential advisor for over 70 students, acting as the first source of information for campus life and resources. My responsibilities included weekly social events, shifts where I was the primary contact for resident emergencies, and meeting regularly with my residents to form meaningful connections."
    }
];

export const researchItems: ResearchItem[] = [
    {
      title: "Sparse Model Graphing",
      startDate: 'Aug 2023',
      endDate: 'Current',
      description: "I joined a PhD student as a paid undergraduate researcher where I am designing an interactable front-end for his program produces variable graphs from an extensible Graph Neural Network-based classifier (98% accuracy) for sparse matrix structure detection.",
    },
    {
      title: "Reinforcement Learning",
      startDate: 'Aug 2022',
      endDate: 'Aug 2023',
      description: "During junior year, I collaborated with a team of students interested in pursing research in machine learning, specifically reinforcement learning. We used PyTorch, q-tables, and the Bellman equation to train a model to play tic-tac-toe against itself, resutling in a highly efficient tic-tac-toe player (I did lose to it a few times).",
    },
    {
      title: "Autonomous Driving",
      startDate: 'Aug 2021',
      endDate: 'May 2022',
      description: "For my entire sophomore year, I worked with the Mechanical Engineering department to implement object detection on the camera of a vehicle. I used OpenCV and Houge line detection to recognize objects on the frame, and then integrated with their existing Lidar technology to turn the wheels to avoid hitting the object, or stopping the car if avoidance was impossible.",
    },
    {
      title: "NASA L'SPACE Program",
      startDate: 'Sep 2020',
      endDate: 'Jan 2021',
      description: "I joined the NASA L'SPACE program my freshman year in Aug. 2020. I worked alongisde a NASA export and other students to create a proposal for a deionizing airlock that would mitigate the amount of moon dust entering the astronaut chambers.",
    },
    {
      title: "OU Data Analytics Lab",
      startDate: 'Jan 2021',
      endDate: 'May 2021',
      description: "In my second semester of freshman year, I worked with a PhD student in his research of detecting Simpson's paradox within a given dataset. As Simpson's paradox is widely used for misrepresenting data, this work was important to be able to identify potential misuse of data to undermine the validity of public data.",
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