import airbnb from "../assets/projects/airbnb.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import befit from "../assets/projects/befit.png";

export const HERO_CONTENT = `I am a passionate and driven Software Engineer with a strong focus on front-end development and a growing interest in AI and machine learning. Through my internship and academic projects, I've gained hands-on experience in technologies like React, Flask, and Python, while also developing a solid understanding of web development and data analysis. With a knack for problem-solving and an eagerness to learn, I'm constantly looking for opportunities to create innovative, user-centric solutions.`;

export const ABOUT_TEXT = `Hi, I'm Parth Nagdev, a final-year B.Tech student in Information Technology at VIT. I'm passionate about software development, problem-solving, and constantly learning new technologies. I've worked on various projects, from front-end development to machine learning, and completed an internship where I built two widgets now in production. My goal is to create impactful, user-friendly solutions while continuously growing in the tech world.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Dec 2023",
    role: "Frontend Developer Intern",
    company: "Ranglani Tech. Inc.",
    description: `During my internship as a Front-End Developer, I developed two production-ready widgets for Shopify—Inactive Tab and Icon Banner—using HTML, CSS, JavaScript, React, LitElement, and Liquid. These widgets are now live, with more than 30 stores using them, and the app is rated 5 stars. I led the research and design process, identifying key user needs and incorporating over 20+ customizable options in the Icon Banner, such as modal and pagination to handle over 3,000 icons efficiently. For the Inactive Tab, I implemented features like tab heading and swapping speed, enhancing user engagement by leveraging setTimeout and setInterval for smooth transitions. This experience allowed me to collaborate closely with the backend team, integrate APIs seamlessly, and deliver a solution that significantly improved user interaction and customization.`,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "LitElement",
      "Liquid",
    ],
  },
  {
    year: "Feb 2023 - Mar 2024",
    role: "Core Committee Members",
    company: "IEEE-IAS",
    description: `Worked on minor projects to brush-up skills.
      I worked closely with other members to brainstorm and develop new ideas and work on them for hackathons 
      organized by the chapter. We focused on creating feasible and innovative ideas
      I contributed to various projects that were a part of chapter events.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Web Development",
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Booking Web-application (Airbnb Clone)",
    image: airbnb,
    description:
      "A full-stack Airbnb clone implementing user authentication, property listing/search, and a booking system. Features a RESTful API for efficient data management.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.JS", "Express.js"],
    link: "https://github.com/parth-1203/Wild-Connect",
  },
  {
    title: "Wild Connect",
    image: project3,
    description:
      "A website to connect poeple willing to volunteer to protect and preserve wildlife. Allows posting such events, jobs and materials.",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://github.com/parth-1203/Wild-Connect",
  },
  // {
  //   title: "Notes Summarizer",
  //   image: project4,
  //   description:
  //     "A Django Web Application to summarize notes. Be it text or image PDF, the application can summarize it and return a PDF.",
  //   technologies: ["HTML", "CSS", "Django", "openCV", "OCR", "llama"],
  //   // link: "https://github.com/parth-1203/Notes-Summarizer",
  // },
  {
    title: "Travel Buddy Finder",
    image: project1,
    description:
      "A fully functional website to address the challenges of solo travel, high costs, and missed opportunities for meaningful connections.",
    technologies: ["EJS", "CSS", "Node.js", "MongoDB", "Express.JS", "mySQL", "Passport.js"],
    link: "https://github.com/parth-1203/Travel-Buddy-Finder",
  },
  {
    title: "Disinformation Detection",
    image: project2,
    description:
      "A webapp to detect disinformation and its sensitivity. Includes Python algorithm to verify news",
    technologies: ["HTML", "CSS", "Flask", "Python", "File Handling"],
    link: "https://github.com/parth-1203/Fake-news-and-disinformation-detecting-system",
  },
  {
    title: "Music Recommender",
    image: project6,
    description:
      "Built a music recommender using ML vectorization on a Kaggle dataset, with a Streamlit.io frontend.",
    technologies: [
      "Streamlit.io",
      "Python",
      "Count Vectorization",
      "Machine Learning",
    ],
    link: "https://github.com/parth-1203/music_recommender_system",
  },
  {
    title: "BeFit",
    image: befit,
    description:
      "A full-stack gym website featuring a responsive interface, form validation, and seamless navigation. Includes a payments page with backend-validated payment confirmation.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    link: "https://github.com/parth-1203/BeFit",
  },
];

export const CONTACT = {
  intro: "I would love to hear from you.",
};

export const CERTIFICATES = [
  {
    title: "Completion Of Training in Machine Learning",
    issuer: "Acmegrade (Mood Indigo)",
    link: "https://drive.google.com/file/d/1EL9xvOQf2ZNztmGh1f8UWzriRU6RKkpL/view",
  },
  {
    title: "Webflow 101",
    issuer: "Webflow",
    link: "https://drive.google.com/file/d/1qxLCI041GjX5SfiNGU7aD-ePIkRPhy7L/view",
  },
  {
    title: "Cyber Forensics T20 Series",
    issuer: "3rd Position",
    link: "https://drive.google.com/drive/folders/1nY6HRq0hYsApXDfnHDnwgmz1umbf_TJq",
  },
  {
    title: "Book Chapter: - The Marvel of Technology, “Artificial intelligence and voice assistants”",
    issuer: "Royal Book Publishing",
    link: "https://www.researchgate.net/publication/368838718_ARTIFICIAL_INTELLIGENCE_AND_VOICE_ASSISTANTS",
  },
  {
    title: "Research Paper - A Digital Forensic Analysis of Profiling and Avoidance of Websites Disseminating Disinformation",
    issuer: "IEE",
    link: "https://ieeexplore.ieee.org/abstract/document/10493661/",
  }
];
