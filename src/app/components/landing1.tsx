import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
    subsets: ['latin'],         // Required
    weight: ['400', '700'],     // Optional: font weights
    display: 'swap',            // Optional
})

function Landing1() {
    const text = "Saneesh N"
    const text1 = "Web-designer, developer"

    //     const handleClick = () => {
    //     window.open("https://instagram.com/yourprofile", "_blank", "noopener,noreferrer");
    //   };


    return (
        <div className="w-full">
            <div className="flex flex-col items-start  ">
                <div className="flex flex-row items-center mt-2 gap-5 p-2" >
                    <div className="flex flex-row items-center gap-">

                        <div className="flex items-center  justify-start">

                            <motion.div
                                className="mr-0.5  bg-zinc-300 w-5 h-10  rounded-full rounded-r-none "
                                initial={{
                                    x: 130,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 100
                                }}
                                transition={{ duration: 0.7, ease: "linear" }}

                            >

                            </motion.div>
                            <motion.div
                                className="mr-0.5  bg-zinc-300 w-7 h-15  rounded-full rounded-r-none "
                                initial={{
                                    x: 110,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 100
                                }}
                                transition={{ duration: 0.6, ease: "linear" }}

                            >

                            </motion.div>
                            <motion.div
                                className="mr-0.5  bg-zinc-300 w-9 h-20  rounded-full rounded-r-none "
                                initial={{
                                    x: 70,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 50

                                }}
                                transition={{ duration: 0.5, ease: "linear" }}

                            >

                            </motion.div>


                        </div>

                        <motion.div
                            className="w-fixed w-20 h-20 rounded-full  overflow-hidden border border-gray-300"
                            initial={{
                                x: 70,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 50

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
                    <div className="flex flex-col justify-center bg-transparent  h-30  z-50  ">
                        <div >{text}</div>
                        <div className="text-zinc-400">{text1}</div>
                        <div className="flex flex-row gap-2  text-zinc-400">
                            <Link href="https://www.instagram.com/" target="_blank">
                                <button>
                                    <Instagram  className="hover:rotate-180 transition-[500px]"/>
                                </button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/saneesh-n-aa9639266/" target="_blank">
                                <button>
                                    <Linkedin className="hover:rotate-180 transition-[50px]"/>

                                </button>
                            </Link>
                            <Twitter className="hover:rotate-360 transition-[50px]"/>

                        </div>
                    </div>
                </div>

                <div className="flex mt-5 px-6  gap-5">

                    <div>
                        <div className="flex flex-row items-center  gap-2">
                            <p className="bg-lime-300 w-3 h-3 rounded-full"></p>
                            <p className="text-zinc-800 text-sm font-semibold">Available for freelance</p>
                        </div>
                        <div
                            className={`${comfortaa.className} text-3xl mt-7 leading-11 flex p-1 flex-wrap items-center gap-x-2.5`}
                        >
                            <span>Hi! I am</span>
                            <span className="bg-zinc-50 shadow-sm rounded-full text-2xl px-3 py-1 ">
                                Saneesh
                            </span>
                            <div className=" flex flex-col gap-5">
                                <div className="flex  mt-3 items-center">
                                <span className="">a</span>
                                <span className="bg-zinc-800 -mt-3 text-white rounded-full ml-3 px-4 py-3  text-xl">
                                    Web-developer
                                </span>
                            </div> 


                            <div className="items-center flex ">
                                <span>from</span>
                                <span className="bg-white ml-2  -mt-3 rounded-full border-1 px-3 py-3 mb- text-xl">
                                    Calicut
                                </span>
                            </div>
                            </div>
                            

                            <span>transforming visions into digital realities with precision and flair.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5 px- mb- ">
                <p className="px-7">(2018 -PRESENT)</p>
                <p className=" px-7 mt-5">
                    I’m dedicated to crafting websites that bring your ideas to life, combining design and development to deliver fast, impactful results.</p>
            </div>
            <div className="px-6 ml-2 mt-7 bg-gree">
                <button className="bg-lime-300 w-50 h-16 p-1.5  justify-between px-4 flex items-center rounded-full">
                    See what i can     <ArrowRight className="bg-zinc-50 rotate-320 hover:rotate-360 transition-[1000px] p-2.5 w-10 h-10 rounded-full font-extralight" />

                </button>
            </div>


        </div>

    )
}

export default Landing1
