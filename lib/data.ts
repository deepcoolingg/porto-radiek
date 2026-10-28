export const heroData = {
  badge: {
    title: "Radiek Portfolio",
    subtitle: "Developer",
  },
  heading: {
    line1: "I build software",
    line2: "that works reliably,",
    highlight: "even under pressure.",
  },
  description: "Full stack developer focused on backend architecture, web development, and system integration. I enjoy building things that keep working well not just on launch day, but as traffic and complexity grow.",
  profile: {
    name: "Radiek Fidiyanto",
    title: "Software Developer",
    image: "/profile.jpeg",
  },
};
 
export const aboutData = {
  heading: "ABOUT ME",
  description: "I’m a software developer based in Jakarta. Through an internship and freelance projects for real clients, I’ve worked on turning complex problems into simple, usable products whether that’s a backend API that handles load well, or a frontend that just feels right to use. I try to write clean code that’s easy for others to work with.",
};
 
export const projectsData = [
    {
    title: "JakEdu",
    url: "https://edu.jakarta.go.id",
    category: "Educational Platform API",
    year: "2025 - 2026",
    description: "JakEdu is the internal platform Pusdatin Dinas Pendidikan DKI Jakarta uses to manage access across several education systems (Selaras, KKI, and Dapodik). Access used to be handled manually through direct database queries. I built a centralized Master Data module (Users, Applications, Roles) backed by a PostgreSQL schema using Role Based Access Control, so admins can grant or revoke access in a few clicks and see clearly who has access to what.",
    role: "Backend Developer",
    tech: ["Golang", "PostgreSQL", "REST API", "Backend Integration"],
    imagePlaceholder: "/jakedu.webp",
  },
  {
    title: "Nibiru",
    url: "https://github.com/deepcoolingg/nibiru",
    category: "E-Commerce Backend Platform",
    year: "2026",
    description: "Nibiru is an e-commerce platform for selling merchandise and digital literary works. I built both the user  facing storefront and the admin panel, using Laravel and PostgreSQL, with Xendit for payments and Biteship for shipping.",
    role: "Backend Developer",
    tech: ["Laravel", "PostgreSQL", "Xendit API", "Biteship API"],
    imagePlaceholder: "/nibiru.webp",
  },
  {
    title: "Figtries",
    url: "https://figtries.com",
    category: "Landing Page & Custom CMS",
    year: "2026",
    description: "Figtries is a company profile landing page and CMS. I built both, with a CMS that lets the client upload and update their own content without needing a developer.",
    role: "Fullstack Developer",
    tech: ["Next.js", "CMS", "SEO", "Tailwind CSS"],
    imagePlaceholder: "/figtries.webp",
  },
  {
    title: "Avarice Tech",
    url: "https://avaricetech.com",
    category: "Landing Page",
    year: "2026",
    description: "Built a company profile website for a software development startup, using Next.js and TypeScript. Focused on a clean, maintainable code structure to keep the site fast and easy to update.",
    role: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    imagePlaceholder: "/avarice.webp",
  },
  {
    title: "Partistic",
    url: "https://partistic.com",
    category: "Landing Page",
    year: "2026",
    description: "Built a portfolio website to showcase exhibition installations and artwork, with a bold, gallery style UI. Used server-side rendering with Next.js to improve page load speed and navigation.",
    role: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    imagePlaceholder: "/partistic.webp",
  }
];
 
export const faqsData = [
  {
    question: "Why not just hire any web developer?",
    answer: "You can, for a simple site. But once your product needs to handle real traffic or grow over time, the difference shows: how easy it is to add a feature or fix a bug without breaking everything else. That's what I focus on getting right from the start."
  },
  {
    question: "What happens if the architecture isn't solid?",
    answer: "Nothing breaks right away that's the tricky part. Shortcuts in the database or API design pile up over time, making changes slower and bugs harder to fix. I'd rather spend a bit more time early so you don't pay for it later."
  },
  {
    question: "Do you only work on backend?",
    answer: "No, I work across the stack. Backend is my strongest area (Go, PHP, JavaScript), but I also build frontends with React, Next.js, and Tailwind CSS so I can handle a project end to end."
  },
  {
    question: "Does code quality matter that early?",
    answer: "More than people expect. Skipping it doesn't show up immediately, but over time it slows everything down, more bugs, slower features, more time spent fixing instead of building. Getting it right early is usually cheaper in the long run."
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
    resumeUrl: "/CV_Muhammad-Radiek-Fidiyanto.pdf",
  },
  pusdatin: {
    description: "Worked on backend development for JakEdu, Pusdatin's internal education data platform, using Golang and PostgreSQL. Reduced API response time by around 15% and resolved 10-15 bugs through debugging and log analysis, while collaborating with the team to keep the system reliable and easy to maintain.",
    organization: "Pusat Data dan Informasi Dinas Pendidikan Provinsi DKI Jakarta",
    roleAndDate: "Web Developer Intern • Aug 2025 - Jan 2026",
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
    certifications: {
      value: "3",
      label: "Certifications - BNSP, IBM, Wadhwani Foundation",
    },
  },
  organization: {
    description: "Progressed from Staff to Head of the HRD Department at Himpunan D3 Sistem Informasi UPNVJ, where I led training curriculum design and mentoring programs for department members. I also initiated ‘Monthly Discuss,’ an internal program to improve communication and team dynamics across the organization.",
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