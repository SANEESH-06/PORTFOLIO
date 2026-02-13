import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Landing2() {
    return (
        <div className='flex xl:m-37 xl:not-visited:ml-68'>
            <div className='flex flex-col gap-2  xl:p-2 ' >
                <div className='flex items-center gap-5'>
                     <p className="bg-lime-300 w-3 h-3 rounded-full"></p>
                <h6 className='text-sm xl:text-xl text-zinc-400'>{`{01} — Featured projects`}</h6>
                </div>
               
                <h2 className='text-4xl xl:w-250 xl:text-8xl' >I blend creativity
                    with technical
                    expertise</h2>
                <div className="mb-10 mt-7  text-black  ">
                    <button className="bg-lime-300  border-1 border-lime-200 shadow-lg shadow-lime-300 w-50 h-16 p-1.5  justify-between px-4 flex items-center rounded-full">
                        Become a client     <ArrowRight className="bg-zinc-50 rotate-320 hover:rotate-360 transition-[1000px] text-black p-2.5 w-10 h-10 rounded-full font-extralight" />

                    </button>
                </div>
            </div>

        </div>
    )
}

