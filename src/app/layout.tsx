import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saneesh | Frontend Developer Portfolio",
  description:
    "Welcome to the portfolio of Saneesh, a frontend developer skilled in Next.js, React, Tailwind CSS, and modern web technologies. Explore my projects, skills, and experience in building responsive, dynamic, and user-friendly websites.",
  keywords: [
    "Saneesh",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
    "Tailwind CSS",
    "JavaScript",
    "UI Developer",
    "Modern Web Development",
  ],
  authors: [{ name: "Saneesh", url: "https://your-portfolio.com" }],
  openGraph: {
    title: "Saneesh | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Saneesh, a frontend developer specializing in Next.js, React, and Tailwind. Showcasing projects, skills, and experience in modern web development.",
    url: "https://your-portfolio.com",
    siteName: "Saneesh Portfolio",
    images: [
      {
        url: "/portfolio-preview.png", // Add a real image inside /public
        width: 1200,
        height: 630,
        alt: "Portfolio Preview of Saneesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saneesh | Frontend Developer Portfolio",
    description:
      "Frontend developer portfolio showcasing projects in Next.js, React, Tailwind CSS, and JavaScript.",
    images: ["/portfolio-preview.png"],
    creator: "@yourTwitterHandle", // optional
  },
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  },
  alternates: {
    canonical: "https://your-portfolio.com",
  },
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url('/b3.jpg')` }}
      >
        {children}

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saneesh",
              url: "https://your-portfolio.com",
              jobTitle: "Frontend Developer",
              description:
                "Frontend developer skilled in React, Next.js, Tailwind CSS, and modern web technologies.",
              sameAs: [
                "https://github.com/yourgithub",
                "https://linkedin.com/in/yourlinkedin",
                "https://twitter.com/yourtwitter",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
