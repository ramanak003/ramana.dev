import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ramana-dev",
    title: "ramana.dev",
    period: {
      start: "01.2025",
    },
    link: "https://www.ramana.dev",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal, pixel-perfect dev portfolio, component registry, and blog built with modern web technologies.
- **Component Registry** – Custom shadcn-like registry for reusable components
- **MDX Blog** – Content-driven blog with full MDX support
- **Modern Stack** – Built with Next.js 16 and Tailwind CSS v4
- **Optimized Performance** – Static export with rich animations and responsive design

[Source Code](https://github.com/ramanak003/ramana.dev)
`,
    logo: "/images/projects/ramana-dev-logo.png",
    isExpanded: true,
  },
  {
    id: "quicktask-application",
    title: "QuickTask-Application",
    period: {
      start: "02.2026",
      end: "03.2026",
    },
    link: "https://todo-taskapplication-debv.vercel.app",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Vercel",
    ],
    description: `A modern task management web application designed to help users organize and manage daily tasks efficiently with a clean and responsive interface.
- **Task Management** – Create, update, and delete tasks easily
- **Task Lists** – Organize tasks into structured lists
- **User Authentication** – Secure login and user management
- **Real-time Database** – Task data stored using Supabase
- **Responsive UI** – Mobile-friendly and modern interface
- **Cloud Deployment** – Hosted and deployed on Vercel
`,
    logo: "/images/projects/quicktask-logo.png",
    isExpanded: true,
  },
  {
    id: "application-landing-page",
    title: "Application Landing Page – Portfolio Description",
    period: {
      start: "03.2024",
    },
    link: "https://application-landing-page-psi.vercel.app/",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    description: `A modern landing page website designed to showcase an application's features, benefits, and user interface with a clean and responsive design.

### Key Features
- **Hero Section** – Application introduction with call-to-action
- **Feature Section** – Application features display
- **Responsive Design** – Mobile and desktop friendly layout
- **Modern UI** – Clean and minimal interface
- **Product Showcase** – Application overview and highlights
`,
  },
  {
    id: "rex-website",
    title: "Rex Website – Application Landing Page",
    period: {
      start: "01.2022",
    },
    link: "https://www.ramana.dev/projects/rex-website",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "GitHub Pages",
    ],
    description: `A modern responsive landing page designed to showcase web applications and product features with a clean and user-friendly interface.

### Key Features
- **Responsive Design** – Mobile, tablet, desktop support
- **Modern UI** – Clean and professional interface
- **Fast Performance** – Optimized static website
- **Easy Navigation** – Simple and smooth user experience`,
    logo: "/images/projects/rex-logo.png",
  },
]
