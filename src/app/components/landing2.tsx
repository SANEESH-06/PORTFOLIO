import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Landing2() {
    return (
        <div className='flex '>
            <div className='flex flex-col gap-2 '>
                <h6 className='text-sm text-zinc-400'>01 — Featured projects</h6>
                <h2 className='text-4xl'>I blend creativity<br />
                    with technical<br />
                    expertise</h2>
                <div className="mb-10 mt-7  text-black  ">
                    <button className="bg-lime-300  border-1 border-lime-200 shadow-lg shadow-lime-300 w-50 h-16 p-1.5  justify-between px-4 flex items-center rounded-full">
                        See what i can     <ArrowRight className="bg-zinc-50 text-black p-2.5 w-10 h-10 rounded-full font-extralight" />

                    </button>
                </div>
            </div>

        </div>
    )
}

