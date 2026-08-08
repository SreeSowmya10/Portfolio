import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mukesh-portfolio-1.vercel.app"),
  title: "Sree Sowmya Gaddam | Software Engineer",
  description:
    "Portfolio of Sree Sowmya Gaddam — Software Engineer focused on Python, cloud-native systems, data platforms, backend engineering, and applied AI.",
  keywords: [
    "Sree Sowmya Gaddam",
    "Software Engineer",
    "Python Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "AWS",
    "FastAPI",
    "React",
    "PostgreSQL",
    "AI ML"
  ],
  authors: [{ name: "Sree Sowmya Gaddam" }],
  creator: "Sree Sowmya Gaddam",
  openGraph: {
    title: "Sree Sowmya Gaddam | Software Engineer",
    description: "Software engineering portfolio focused on scalable systems, cloud, data, and applied AI.",
    type: "website",
    url: "https://mukesh-portfolio-1.vercel.app"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}