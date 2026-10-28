import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ClientWrapper from "@/components/providers/ClientWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radiek.online"),
  title: {
    default: "Muhammad Radiek | Software Developer",
    template: "%s | Muhammad Radiek", 
  },
  description: "Portfolio of Muhammad Radiek Fidiyanto, a software developer based in Jakarta focused on backend architecture, web development, and system integration.",
  keywords: [
    "Muhammad Radiek",
    "Radiek Fidiyanto",
    "Muhammad Radiek Fidiyanto",
    "Software Developer Jakarta",
    "Backend Developer Indonesia",
    "Full Stack Developer",
    "Next.js Developer",
    "Golang Backend",
    "Portofolio",
    "Web Development",
    "System Integration",
    "API Development",
    "Scalable Backend Architecture",
    "Software Engineering",
    "Web Application Development",
    "Full Stack Systems",
  ],
  authors: [{ name: "Muhammad Radiek Fidiyanto" }],
  creator: "Muhammad Radiek Fidiyanto",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://radiek.online", 
    title: "Muhammad Radiek | Software Developer",
    description: "I build software that works reliably, even under pressure.",
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
    description: "I build software that works reliably, even under pressure.",
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
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}