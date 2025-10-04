import { motion } from 'framer-motion'
import React from 'react'
import { Asterisk } from 'lucide-react'

export default function SecondScroll() {
    const text = (
    <div className='flex items-center gap-2'>
       <Asterisk className="inline w-10 h-10 mx-1 text-lime-300" /> 
     <span className='text-lime-300 '></span>  Landing page 
      <Asterisk className="inline w-10 h-10 mx-1 text-lime-300" /> 
      <span className='text-lime-300'></span>Blog
      <Asterisk className="inline w-10 h-10 mx-1 text-lime-300" /> 
      <span className='text-lime-300c'></span>E-commerce
      <Asterisk className="inline w-10 h-10 mx-1 text-lime-300" /> 
      <span className='text-lime-300'></span>Corporate website
      <Asterisk className="inline w-7 h-10 mx-10 text-lime-300" /> 
      <span className='text-lime-300'>95% /</span>E-Social network


    </div>
  );

  return (
    <div className="relaative  w-full ">

      {/* <motion.div
        className="absolute bottom-1 right-1"
        initial={{ filter: "blur(10px)", opacity: 0 }
        }
        animate={{ filter: "blur(0px)", opacity: 1 }}

        transition={{ duration: 2, ease: "anticipate" }}
      >
        ScrollVelocity
      </motion.div>

      <motion.div
        initial={{
          // opacity:0
        }}
        animate={{
          // opacity:0,

          // scale: [1, 2, 2, 1, 1],
          rotate: [0, 360],
          // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        whileHover={{ backgroundColor: "rgba(10, 770, 770, 1)" }}
        transition={{
          duration: 0.1,
          ease: "linear",
          // times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: 0.5,
        }}
        className="w-[50px] h-[50px] bg-lime-200 absolute z-50 rounded-"
      /> */}
      <div className="w-full overflow-hidden bg-zinc-800 py-6.5">
        <motion.div
          className="flex whitespace-nowrap text-3xl font-semibold text-white"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 15, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="mr-10">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>

  )
}

