"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  date: string;
  company: string;
  description: string;
  imageUrl: string;
}

export default function Landing3() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/landing3");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="w-full p-2">
      <div className="grid gap-6 p2">
        {projects.map((item, index) => (
          <div
            key={index}
            className="p-4  rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="flex justify-between text-sm text-gray-500">
              <span>{item.title}</span>
              <span>{item.date}</span>
            </span>
            <h1 className="text-xl font-bold mt-2">{item.company}</h1>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-3">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
