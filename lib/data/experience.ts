export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "Tokyo, Japan",
    startDate: "2020-06",
    endDate: null,
    description: "Lead development of multiple web applications using Next.js, React, and TypeScript. Mentor junior developers and implement best practices across projects.",
    achievements: [
      "Led a team of 5 developers to redesign and rebuild the company's main SaaS platform, resulting in a 40% increase in user engagement",
      "Implemented CI/CD pipelines that reduced deployment time by 70%",
      "Optimized application performance, resulting in a 30% reduction in load times",
      "Created a custom component library used across multiple projects, improving development efficiency",
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "Osaka, Japan",
    startDate: "2018-03",
    endDate: "2020-05",
    description: "Developed responsive web applications and PWAs using React and modern JavaScript. Collaborated with designers and backend developers to implement features and optimize user experiences.",
    achievements: [
      "Developed a progressive web app that increased mobile user retention by 45%",
      "Implemented a comprehensive testing strategy using Jest and React Testing Library, achieving 90% test coverage",
      "Contributed to the migration from a legacy codebase to React, completing the project ahead of schedule",
      "Created reusable UI components and established a design system",
    ],
    technologies: [
      "React", "JavaScript", "Redux", "CSS/SCSS", "Jest", "REST APIs"
    ],
  },
  {
    id: "exp-3",
    role: "Software Developer Intern",
    company: "StartupHub",
    location: "Tokyo, Japan",
    startDate: "2017-05",
    endDate: "2018-02",
    description: "Worked on various aspects of web development, from frontend UI components to backend API endpoints. Gained experience in full-stack development and agile methodologies.",
    achievements: [
      "Developed features for an e-commerce platform that served over 10,000 daily users",
      "Created an internal tool that automated data processing, saving 15 hours of manual work per week",
      "Contributed to the development of a REST API using Node.js and Express",
      "Participated in daily stand-ups and bi-weekly sprint planning meetings, gaining valuable experience in agile development",
    ],
    technologies: [
      "JavaScript", "HTML/CSS", "Node.js", "Express", "MongoDB", "Git"
    ],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "MSc in Computer Science",
    institution: "University of Tokyo",
    location: "Tokyo, Japan",
    startDate: "2015-04",
    endDate: "2017-03",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Thesis on 'Improving User Experience in Web Applications through Adaptive Interfaces'.",
    achievements: [
      "Graduated with honors (GPA 3.8/4.0)",
      "Published two research papers on adaptive user interfaces",
      "Received Excellence in Research award for Master's thesis",
      "Teaching Assistant for 'Introduction to Web Development' course",
    ],
  },
  {
    id: "edu-2",
    degree: "BSc in Information Technology",
    institution: "Kyoto University",
    location: "Kyoto, Japan",
    startDate: "2011-04",
    endDate: "2015-03",
    description: "Studied computer programming, algorithms, data structures, and database systems. Minor in User Experience Design.",
    achievements: [
      "Dean's List for all semesters",
      "Led a student project to develop a campus navigation app",
      "Won first place in the annual programming competition",
      "Member of the university's computer science society",
    ],
  },
];