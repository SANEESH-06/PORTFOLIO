import { NextResponse } from "next/server";

export async function GET() {
  const projects = [
    {
      title: "Pottery Artist Portfolio",
      date: "2024-05-31",
      company: "SilverLynxTechnologies",
      description: "Web design & Web development",
      imageUrl: "/bg2.jpg", 
    },
    {
      title: "Modern UI Project",
      date: "2024-06-10",
      company: "Creative Minds",
      description: "Frontend development with Next.js",
      imageUrl: "/bg2.jpg",
    },
    {
      title: "Corporate Website",
      date: "2024-07-01",
      company: "TechWorld",
      description: "Full stack web development",
      imageUrl: "/bg.jpg",
    },
        {
      title: "Corporate Website",
      date: "2024-07-01",
      company: "TechWorld",
      description: "Full stack web development",
      imageUrl: "/bg.jpg",
    },
  ];

  return NextResponse.json(projects);
}
