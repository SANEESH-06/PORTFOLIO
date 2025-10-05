import React from "react";

export default function Landing5() {
  return (
    <div className="relative w-screen h- overflow-hidden flex items-center justify-center bg-black">
      {/* 🎬 Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[100vh] h-auto object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧠 Title */}
      <h1 className="absolute text-red-500 text-4xl font-bold bottom-5 tracking-wide">
        Creative Vision
      </h1>
    </div>
  );
}
