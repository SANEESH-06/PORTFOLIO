import { NextResponse } from "next/server";

export async function GET() {
  const projects = [
    {
      title: "",
      date: "2024-05-31",
      company: "Interactive Web",
      description: "Web design & Web development",
      imageUrl: "/wrk2.jpeg", 
    },
    {
      title: "",
      date: "2024-06-10",
      company: "Creative Minds",
      description: "Frontend development with Next.js",
      imageUrl: "/wrk1.jpeg",
    },
    {
      title: "",
      date: "2024-07-01",
      company: "UI",
      description: "Custom UI Development",
      imageUrl: "/wrk3.jpeg",
    },
    //     {
    //   title: "Corporate Website",
    //   date: "2024-07-01",
    //   company: "Music suround",
    //   description: "Music app",
    //   imageUrl: "/wrk4.jpeg",
    // },
  ];

  return NextResponse.json(projects);
}
