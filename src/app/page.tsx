"use client";
import { useEffect, useRef, useState } from "react";
import Nav from "./components/navbar";
import LoopScrollText from "./components/ScrollVelocity";
import Landing1 from "./components/landing1";
import Landing2 from "./components/landing2";
import Landing3 from "./components/landing3";
import Viewall from "./components/view-all";
import SecondScroll from "./components/secondscroll";
import Landing4 from "./components/landing4";
import { Play } from "lucide-react";

export default function Page() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/mobbg.png')",
      }}
    >
      <div className="p-2">
        <Nav />
        <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="fixed bottom-4 flex justify-center items-center right-4 bg-zinc-50 text-zinc-600 w-10  border-1  h-10 rounded-full shadow-lg"
          >    <Play className="hover:rotate-360 transition-[4000px]" />
          </button>
        )}
      </div>

      <Landing1 />
      <LoopScrollText />
      <div className="bg-black text-white p-2 flex justify-start px-6">
        <Landing2 />
      </div>
      <div className="bg-black text-white flex justify-start px-6">
        <Landing3 />
      </div>
      <div className="bg-lime-300 p-2">
        <Viewall />
      </div>
      <SecondScroll />
      <div className="p-2">
        <Landing4 />
      </div>
    </div>
  );
}
