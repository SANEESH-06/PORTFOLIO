import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"], // Required
  weight: ["400", "700"], // Optional: font weights
  display: "swap", // Optional
});

function Landing1() {
  const text = "Saneesh N";
  const text1 = "Web-designer, developer";

  //     const handleClick = () => {
  //     window.open("https://instagram.com/yourprofile", "_blank", "noopener,noreferrer");
  //   };

  return (
    <div className="w-full  md:mt-25 flex flex-col justify-center">
      <div className="flex flex-col xl:px-65 md:flex-row items-start p-2 md:items-start  xl:pt-8   md:justify-center">
        <div className="flex flex-row xl:pt-20 md:justify-center items-center mt-2 gap-5 p-2 ">
          <div className="flex flex-row items-center md:justify-center gap-">
            <div className="flex items-center  justify-start md:justify-center">
              <motion.div
                className="mr-0.5  bg-zinc-300 w-5 h-10  rounded-full rounded-r-none "
                initial={{
                  x: 130,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 100,
                }}
                transition={{ duration: 0.7, ease: "linear" }}
              ></motion.div>
              <motion.div
                className="mr-0.5  bg-zinc-300 w-7 h-15  rounded-full rounded-r-none "
                initial={{
                  x: 110,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 100,
                }}
                transition={{ duration: 0.6, ease: "linear" }}
              ></motion.div>
              <motion.div
                className="mr-0.5  bg-zinc-300 w-9 h-20  rounded-full rounded-r-none "
                initial={{
                  x: 70,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 50,
                }}
                transition={{ duration: 0.5, ease: "linear" }}
              ></motion.div>
            </div>

            <motion.div
              className="w-fixed w-20 h-20  md:w-30 md:h-30 rounded-full  overflow-hidden border border-gray-300"
              initial={{
                x: 70,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 50,
              }}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              <Image
                src="/sn.webp"
                alt="description"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 scale-190 -mt-5 hover:scale-200"
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center bg-transparent  h-30 xl:w-50  z-50  ">
            <div>{text}</div>
            <div className="text-zinc-400">{text1}</div>
            <div className="flex flex-row gap-2  text-zinc-400">
              <Link href="https://www.instagram.com/" target="_blank">
                <button>
                  <Instagram className="hover:rotate-180 transition-[500px]" />
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/saneesh-n-aa9639266/"
                target="_blank"
              >
                <button>
                  <Linkedin className="hover:rotate-180 transition-[50px]" />
                </button>
              </Link>
              <Twitter className="hover:rotate-360 transition-[50px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 px-6  gap-5">
          <div>
            <div className="flex flex-row items-center  gap-2">
              <p className="bg-lime-300 w-3 h-3 animate-pulse rounded-full"></p>
              <p className="text-zinc-800 text-sm font-semibold">
                Available for freelance
              </p>
            </div>
            <div
              className={`${comfortaa.className} text-3xl xl:pt-10 xl:leading-10 xl:gap-5 xl:text-7xl gap-2 mt-7 leading-10 flex-col flex p-1 justify-start sm:text-5xl `}
            >
              <div className="flex flex-row">
                <span>{`Hi! I'm`}</span>
                <motion.span
                  initial={{ opacity: 0, x: -300}}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="bg-zinc-50  ml-5 xl:h-10 shadow-sm rounded-full hover:bg-transparent justify-center text-2xl py-1 flex w-35 hover:scale-110 transition duration-1000"
                >
                  Saneesh
                </motion.span>
              </div>

              <div className=" flex flex-col xl:flex-row xl:gap-2 gap-5 xl:gap-8">
                <div className=" flex   sm:mt-3 items-center">
                  <br />
                  <span className="">a</span>
                  <motion.span
                  initial={{opacity:0,x:800}}
                  animate={{opacity:1, x:0}}
                  transition={{duration:0.5, ease:"circOut"}}
                  className="bg-zinc-800 transition-1000  mt-2 xl:ml-5 hover:scale-120 transition duration-1000 text-white rounded-full  px-7 sm:px-16 py-3  text-lg">
                    Web-developer
                  </motion.span>
                </div>

                <div className="items-center flex  flex-row">
                  <span>from</span>
                  <motion.span 
                  initial={{opacity:0, y:0}}
                  animate={{opacity:1,  y:0}}
                  transition={{duration:2 , ease:"anticipate"}}

                  className="bg-white ml-2 hover:scale-120 transition duration-1000 -mt-3 rounded-full border-1 px-3 py-3 mb- text-xl">
                    
                    
                    Calicut
                  </motion.span>
                </div>
              </div>

              <span className="leading-14.5 -mt-2  xl:leading-19">
                transforming visions into digital realities with precision and
                flair.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col justify-center xl:ml-75">
        <div className="flex w-full flex-col md:flex-row mt-5 md:gap-49 xl:gap-40 md:items-center px- mb- ">
          <span className="px-7 md:w-70 md:gap-10 font-bold flex">
            (2025 - PRESENT)
          </span>
          <p className="xl:text-2xl font-semibold text-zinc-600  xl:w-200  mt-5 md:mt-0 xl:px-0  md:gap-15 ">
            I’m dedicated to crafting websites that bring your ideas to life,
            combining design and development to deliver fast, impactful results.
          </p>
        </div>
        <div className="px-6 xl:ml-104 mt-7 bg-gree">
          <button className="bg-lime-300 w-50 h-16 p-1.5  justify-between px-4 flex items-center rounded-full">
            See what i can{" "}
            <ArrowRight className="bg-zinc-50 rotate-320 hover:rotate-360 transition-[1000px] p-2.5 w-10 h-10 rounded-full font-extralight" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing1;
