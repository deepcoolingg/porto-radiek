import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Radiek | Software Developer",
    template: "%s | Muhammad Radiek", 
  },
  description: "Portfolio of Muhammad Radiek Fidiyanto, a Software Developer based in Jakarta specializing in high performance web applications, backend architecture, and full stack systems.",
  keywords: [
    "Muhammad Radiek",
    "Radiek Fidiyanto",
    "Muhammad Radiek Fidiyanto",
    "Software Developer Jakarta",
    "Backend Engineer Indonesia",
    "Full Stack Developer",
    "Next.js Developer",
    "Golang Backend",
    "Portofolio",
    "Web Development",
    "System Integration",
    "API Development",
    "Digital Ecosystems",
    "High Performance Web Apps",
    "Scalable Backend Architecture",
    "Clean Frontend Execution",
    "Software Engineering",
    "Web Application Development",
    "Backend Architecture",
    "Full Stack Systems",
    "System Integration",
    "API Development",
  ],
  authors: [{ name: "Muhammad Radiek Fidiyanto" }],
  creator: "Muhammad Radiek Fidiyanto",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://radiek.online", 
    title: "Muhammad Radiek | Software Developer",
    description: "Crafting scalable software and high performance digital ecosystems.",
    siteName: "Radiek Portfolio",
    images: [
      {
        url: "/profile.jpeg", 
        width: 1200,
        height: 630,
        alt: "Muhammad Radiek Fidiyanto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Radiek | Software Developer",
    description: "Crafting scalable software and high performance digital ecosystems.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}