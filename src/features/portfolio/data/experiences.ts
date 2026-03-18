import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "duhzine-it-solutions",
    companyName: "Duhzine IT Solutions Pvt Ltd",
    positions: [
      {
        id: "fullstack-intern",
        title: "Fullstack Developer",
        employmentPeriod: {
          start: "11.2025",
          end: "02.2026",
        },
        employmentType: "Internship",
        description: `Three-month intensive internship specializing in building modern web interfaces and scalable backend systems.
- **Fullstack Development** – Developed high-performance applications using **React**, **Next.js**, and **TypeScript**.
- **UX/UI Design** – Applied advanced design principles to create intuitive and user-centric interfaces.
- **Technical Problem Solving** – Collaborated in an agile environment to resolve complex architectural challenges.`,
        icon: "code",
        skills: [
          "Fullstack Development",
          "UX/UI Design",
          "React",
          "TypeScript",
          "Analytical Skills",
          "Team Collaboration",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "bsc-education",
        title: "Kongu College of Arts & Science, Karur",
        employmentPeriod: {
          start: "03.2020",
          end: "06.2023",
        },
        icon: "education",
        description: `**B.Sc. in Computer Science**
- **CGPA: 7.23/10**
- Language Proficiency: English`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Event Management",
          "Workshop Organization",
          "Leadership",
          "Team Coordination",
        ],
      },
      {
        id: "high-school-education",
        title: "Karur Saraswathi Vidyalaya School",
        employmentPeriod: {
          start: "06.2018",
          end: "06.2020",
        },
        icon: "education",
        description: `- Completed higher secondary education with a solid academic foundation
- Demonstrated consistency and commitment to learning across core subjects
- Built early interest in computers, analytical thinking, and problem-solving`,
        skills: [],
      },
    ],
  },
];
