export const heroData = {
  badge: {
    title: "Radiek Portfolio",
    subtitle: "Developer",
  },
  heading: {
    line1: "Crafting scalable software",
    line2: "and high performance",
    highlight: "digital ecosystems.",
  },
  description: "A full stack software developer specializing in backend architecture, web development, and system integration building solid products that perform at scale.",
  profile: {
    name: "Radiek Fidiyanto",
    title: "Software Developer", 
    image: "/profile.jpeg", 
  },
};

export const aboutData = {
  heading: "ABOUT ME",
  description: "I am a Software Developer based in Jakarta, passionate about turning complex problems into intuitive digital products. From building solid backend APIs to crafting seamless frontend experiences, I focus on writing clean, maintainable code that brings ideas to life.",
};

export const projectsData = [
  {
    title: "Nibiru",
    category: "E-Commerce Backend Platform",
    year: "2026",
    description: "Engineered a robust e-commerce backend for merchandise and digital literary works using PHP (Laravel), PostgreSQL, Xendit payment processing, and Biteship logistics APIs.",
    role: "Backend Developer",
    tech: ["Laravel", "PostgreSQL", "Xendit API", "Biteship API"],
    imagePlaceholder: "/nibiru.png",
  },
  {
    title: "JakEdu",
    category: "Educational Platform API",
    year: "2025 - 2026",
    description: "Architected and maintained scalable backend RESTful APIs using Golang and PostgreSQL for the JakEdu educational platform during my internship at Pusdatin Dinas Pendidikan DKI Jakarta.",
    role: "Backend Developer",
    tech: ["Golang", "PostgreSQL", "REST API", "Backend Integration"],
    imagePlaceholder: "/jakedu.png",
  },
  {
    title: "Figtries",
    category: "Landing Page & Custom CMS",
    year: "2026",
    description: "Developed a high performance landing page and a custom Content Management System (CMS) for a digital systems architecture agency. Optimized for SEO, custom metadata, and fast indexing.",
    role: "Fullstack Developer",
    tech: ["Next.js", "CMS", "SEO", "Tailwind CSS"],
    imagePlaceholder: "/figtries.png",
  }
];

export const faqsData = [
  {
    question: "Why shouldn't I just hire a standard web developer?",
    answer: "A standard developer builds features to make things work temporarily. I engineer digital ecosystems. My focus is on scalable backend architecture and clean front end execution, ensuring your product doesn't just look good, but survives heavy traffic and complex business logic."
  },
  {
    question: "What's the actual cost of bad system architecture?",
    answer: "Technical debt. Cutting corners on your database structure (PostgreSQL/MySQL) or API logic now means costly rewrites, server crashes, and security vulnerabilities later. I build the foundation right the first time so you can scale without bottlenecks."
  },
  {
    question: "Do you only handle backend engineering?",
    answer: "No. I am a Full Stack Software Developer. While my core strength lies in robust backend systems (Go, PHP, JavaScript), I seamlessly integrate them with high performance, interactive front ends using React, Next.js, and Tailwind CSS, giving you a complete solution."
  },
  {
    question: "What happens if we don't prioritize scalable code?",
    answer: "Your platform will eventually break under its own weight. Features will take longer to build, bugs will multiply, and user experience will plummet. Hiring a strategic engineer isn't an expense; it's an investment in your product's survival."
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
    description: "Engineered and maintained the backend API architecture for the JakEdu platform, ensuring solid system integration.",
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
    description: "Led member development initiatives and engineered training curricula for the student body.",
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