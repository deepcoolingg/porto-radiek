export const heroData = {
  badge: {
    title: "Radiek Portfolio",
    subtitle: "Developer",
  },
  heading: {
    line1: "I build software",
    line2: "that holds up",
    highlight: "under real use.",
  },
  description: "A full stack developer focused on backend architecture, web development, and system integration. I care less about things that just work, and more about things that keep working — even when traffic spikes or business logic gets messy.",
  profile: {
    name: "Radiek Fidiyanto",
    title: "Software Developer",
    image: "/profile.jpeg",
  },
};
 
export const aboutData = {
  heading: "ABOUT ME",
  description: "I'm a software developer based in Jakarta. I like taking something complicated and turning it into a product that's actually simple to use. That could mean building a backend API that doesn't fall over under load, or putting together a frontend that just feels right to use. Either way, I try to write code that's clean enough for someone else — or future me — to pick up without wanting to start over.",
};
 
export const projectsData = [
  {
    title: "Nibiru",
    url: "https://github.com/deepcoolingg/nibiru",
    category: "E-Commerce Backend Platform",
    year: "2026",
    description: "Built the backend for an e-commerce platform selling merchandise and digital literary works. Used PHP (Laravel) and PostgreSQL for the core system, with Xendit handling payments and Biteship handling shipping logistics.",
    role: "Backend Developer",
    tech: ["Laravel", "PostgreSQL", "Xendit API", "Biteship API"],
    imagePlaceholder: "/nibiru.png",
  },
  {
    title: "JakEdu",
    url: "https://edu.jakarta.go.id/home/site/",
    category: "Educational Platform API",
    year: "2025 - 2026",
    description: "Built and maintained the backend REST APIs for JakEdu, an educational platform, using Golang and PostgreSQL. Part of my internship at Pusdatin Dinas Pendidikan DKI Jakarta.",
    role: "Backend Developer",
    tech: ["Golang", "PostgreSQL", "REST API", "Backend Integration"],
    imagePlaceholder: "/jakedu.png",
  },
  {
    title: "Figtries",
    url: "https://figtries.com/",
    category: "Landing Page & Custom CMS",
    year: "2026",
    description: "Built a fast landing page and a custom CMS for a digital systems architecture agency, with attention to SEO, metadata, and page load speed.",
    role: "Fullstack Developer",
    tech: ["Next.js", "CMS", "SEO", "Tailwind CSS"],
    imagePlaceholder: "/figtries.png",
  }
];
 
export const faqsData = [
  {
    question: "Why not just hire any web developer?",
    answer: "You can — for a simple site, that's probably fine. But once your product needs to handle real traffic, more complex logic, or just needs to grow over time, the difference starts to show: how easy it is to add a feature, fix a bug, or scale without rewriting half the system. That's the part I focus on getting right from the start."
  },
  {
    question: "What actually happens if the architecture isn't solid?",
    answer: "Usually not a crash on day one — it's slower than that. Shortcuts in the database structure or API design tend to pile up as technical debt: things get harder to change, bugs get harder to trace, and eventually you're looking at a rewrite instead of an update. I'd rather spend a bit more time upfront so you're not paying for it later."
  },
  {
    question: "Do you only work on backend?",
    answer: "No, I work across the stack. Backend is where I'm strongest (Go, PHP, JavaScript), but I also build frontends with React, Next.js, and Tailwind CSS — so I can take a project from the database up to the interface without needing to hand it off halfway."
  },
  {
    question: "Does code quality really matter that much early on?",
    answer: "More than people expect. Skipping it doesn't break anything right away, which is exactly why it's easy to ignore — but over time, features take longer, bugs multiply, and more effort goes into maintaining than building. Getting it right early is usually cheaper than fixing it later."
  }
]; 

export const techChipsData = [
  { label: "JavaScript", slug: "javascript", bg: "#F7DF1E", fg: "#000000" },
  { 
  label: "Java", 
  slug: "java", 
  bg: "#007396", 
  fg: "#ffffff",
  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  { label: "Kotlin", slug: "kotlin", bg: "#0095D5", fg: "#ffffff" },
  { label: "TypeScript", slug: "typescript", bg: "#3178C6", fg: "#ffffff" },
  { label: "Tailwind", slug: "tailwindcss", bg: "#0F172A", fg: "#38B2AC" },
  { label: "Golang", slug: "go", bg: "#00ADD8", fg: "#ffffff" },
  { label: "PHP", slug: "php", bg: "#777BB4", fg: "#ffffff" },
  { label: "Python", slug: "python", bg: "#3776AB", fg: "#ffffff" },
  { label: "MySQL", slug: "mysql", bg: "#4479A1", fg: "#ffffff" },
  { label: "PostgreSQL", slug: "postgresql", bg: "#4169E1", fg: "#ffffff" },
  { label: "MongoDB", slug: "mongodb", bg: "#47A248", fg: "#ffffff" },
  { label: "Git", slug: "git", bg: "#F05032", fg: "#ffffff" },
  { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
  { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
  { label: "Kubernetes", slug: "kubernetes", bg: "#326CE5", fg: "#ffffff" },
  { label: "Postman", slug: "postman", bg: "#FF6C37", fg: "#ffffff" },
  { label: "GraphQL", slug: "graphql", bg: "#E10098", fg: "#ffffff" },
];

export const experienceData = {
  header: {
    title: "Education & Experience",
    resumeUrl: "/Radiek_Fidiyanto_CV.pdf",
  },
  pusdatin: {
    description: "Built and maintained the backend API architecture for the JakEdu platform, working with the team to keep the system integrated and running smoothly.",
    organization: "Pusat Data dan Informasi Dinas Pendidikan Provinsi DKI Jakarta",
    roleAndDate: "Web Developer Intern • Oct 2025 - Jan 2026",
    logoPath: "/pusdatin.png",
  },
  education: {
    major: "Information Systems",
    institution: "Fakultas Ilmu Komputer, Universitas Pembangunan Nasional Veteran Jakarta.",
    logoPath: "/upnvj.webp",
  },
  stats: {
    gpa: {
      value: "3.78",
      label: "Cumulative GPA (Cumlaude)",
    },
    leadership: {
      value: "2 Years",
      label: "Active Student Leadership",
    }
  },
  organization: {
    description: "Helped run member development programs and put together training materials for the student body.",
    roles: [
      {
        title: "Staff of HRD Department",
        period: "Himpunan D3 Sistem Informasi UPNVJ • 2024",
      },
      {
        title: "Head of HRD Department",
        period: "Himpunan D3 Sistem Informasi UPNVJ • 2025",
      }
    ]
  }
};