import React from "react";

export default function Landing5() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧠 Overlay Title */}
      <h1 className="relative z-10 text-red-500 text-4xl font-bold tracking-wide">
        Creative Vision
      </h1>
    </div>
  );
}
