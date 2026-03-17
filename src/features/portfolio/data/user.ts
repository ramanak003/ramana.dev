import { ASSETS_URL } from "@/config/constants"
import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Ramana",
  lastName: "K",
  displayName: "ramana.dev",
  username: "ramanak003",
  gender: "male",
  pronouns: "he/him",
  bio: "Problem Solver, Open Source Contributor, and Full Stack Developer. Creating with code.",
  flipSentences: [
    "Problem Solver",
    "Open Source Contributor",
    "Full Stack Developer",
  ],
  address: "Chennai, India",
  phoneNumber: "KzkxOTM0NTY0MzQ5NA==", // +919345643494
  email: "cmFtYW5hay5kZXZAZ21haWwuY29t", // base64 encoded
  website: "https://ramanak003.github.io/ramana.dev/",
  jobTitle: "Fullstack Developer @ Duhzine IT Solutions",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "Duhzine IT Solutions",
      website: "https://duhzine.com",
    },
  ],
  about: `
A passionate **Problem Solver**, **Open Source Contributor**, and **Full Stack Developer** focused on building modern and responsive web applications.

Experienced in developing projects that combine clean frontend design with efficient backend functionality. Works with technologies such as **Next.js**, **React**, **TypeScript**, **JavaScript**, **HTML**, **CSS**, and **Tailwind CSS** to create modern web interfaces and full-stack applications.

Completed a **Full Stack Developer Internship at Duhzine IT Solutions**, gaining hands-on experience working on real-world projects and improving development skills.

As a **Problem Solver**, I have built several personal and portfolio projects that demonstrate practical solutions and modern development practices.

I am also an active **Open Source Contributor**, continuously learning and aiming to grow as a professional software developer while contributing to impactful digital products.
`,
  avatar: "/images/avatar.jpg",
  ogImage: `${ASSETS_URL}/images/screenshot-og-image-dark.png?v=5`,
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "ramanak",
    "ramana k",
    "Ramana",
    "Ramana Dev",
    "Ram K",
    "Problem Solver",
    "Open Source Contributor",
    "Full Stack Developer",
    "ramana.dev",
    "ramanaportfolio",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User
