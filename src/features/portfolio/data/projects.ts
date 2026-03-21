import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ramana-dev",
    title: "ramana.dev",
    period: {
      start: "01.2025",
    },
    link: "https://ramana-dev.vercel.app",
    github: "https://github.com/ramanak003/ramana.dev",
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
    id: "rex-website",
    title: "Rex – Application Landing Page",
    period: {
      start: "01.2022",
    },
    link: "https://ramana-dev.vercel.app/projects/rex-website",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "GitHub Pages",
    ],
    description: `A high-performance landing page developed with core web technologies to showcase product features and user interfaces.
- **Responsive Design** – Optimized layouts for mobile, tablet, and desktop viewports.
- **Modern UI Architecture** – Clean, minimal design highlighting product value.
- **Performance Optimization** – Lightweight static execution for near-instant load times.
- **Hand-crafted Code** – Built with pure HTML, CSS, and JavaScript to demonstrate core development proficiency.`,
    logo: "/images/projects/rex-logo.png",
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
    id: "movie-hunt",
    title: "CineSearch – Real-Time Movie Explorer",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/ramanak003/Moive-Hunt",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "TMDB API", "Vercel"],
    description: `A modern real-time movie search web application that allows users to instantly explore and discover movies with live data fetched from an external API.

### Key Features
- **Real-Time Movie Search** – Instant results using API
- **Movie Details** – Ratings, release date, overview
- **Trending Movies** – Latest popular movies
- **API Integration** – Real-time data fetching
- **Responsive UI** – Mobile + desktop optimized
- **Deployment** – Vercel
`,
    logo: "/images/projects/movie-hunt-logo.png",
    isExpanded: true,
  },
]
