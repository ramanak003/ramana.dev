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
        description: `Completed a three-month intensive technical internship focused on Fullstack Development and UX/UI Design.
- **Fullstack Development** – Contributed to building and adapting emerging technologies with a high level of productivity.
- **UX/UI Design** – Applied design principles as a UXUI Designer intern to enhance user interfaces and experiences.
- **Collaboration** – Fostered strong collaboration with team members and demonstrated excellent analytical skills.`,
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
