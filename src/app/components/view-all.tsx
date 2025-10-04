import { ArrowRight } from 'lucide-react'
import React from 'react'


export default function Viewall() {
    return (
        <div className='w-full '>
               <div className="mb-10 mt-7  text-black flex justify-center items-center gap-5 ">
                <p>View All Project</p>
                    <button className="">
                          <ArrowRight className="bg-zinc-950 rotate-320 hover:rotate-360 transition-[1000px] text-zinc-50 p-2.5 w-10 h-10 rounded-full font-extralight" />

                    </button>
                </div>

        </div>
    )
}
