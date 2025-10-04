"use client"

import Nav from "./components/navbar"
import LoopScrollText from "./components/ScrollVelocity"
import { motion } from "motion/react"
import PolygonHero from "@/app/components/PolygonHero"
import Transform from "@/app/components/transform"
import Landing1 from "./components/landing1"
import Landing2 from "./components/landing2"
import Landing3 from "./components/landing3"
import Viewall from "./components/view-all"
import SecondScroll from "./components/secondscroll"


export default function Page() {
  // const handleAnimationComplete = () => {
  //   console.log("All letters have animated!")
  // }

  return (
    <div className="w-full p-">
      <div className="p-2">
        <Nav />

      </div>
      <Landing1 />
      <div>

      </div>

      <div className="w-full max-w-full mt-4 overflow-">
        <LoopScrollText />

      </div>

      <div className="bg-black text-white p-2 flex justify-start px-6">
        <Landing2 />
      </div>
      <div className="bg-black text-white  flex justify-start px-6">
        <Landing3/>
      </div>
      <div className="bg-lime-300 p-2 "><Viewall/></div>
<div>
  <SecondScroll/>
</div>

      {/* <motion.button animate={{ opacity: 10 }} /> */}


      {/* <Transform />
      <PolygonHero /> */}
      {/* <h1 className="origin-center h-10 w-10 z-50 mb-50 rotate-45">hi</h1> */}

      <div className="">

      </div>
    </div>
  )
}
