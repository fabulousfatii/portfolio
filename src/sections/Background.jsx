import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"


function Background() {
    const refid= useRef()

   
    return (
        <section ref={refid} className='w-full h-screen py-11 bgbackground flex justify-center items-center  '>
           <div className='box'>
           <h1 className='p-6 pt-8 text-5xl font-bold text-center'>Consistency is more important than perfection</h1>
           </div>
        </section>
    )
}

export default Background
