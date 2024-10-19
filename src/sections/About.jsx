import img from "../assets/chai.png"
import laptop from "../assets/laptop-10755.png"
import leaf from "../assets/leaf.png"
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

function About() {
  gsap.registerPlugin( ScrollTrigger,);
  useGSAP(()=>{
    
    gsap.to(".leaf",{
      transform: "rotate(335deg)",
      duration: 1,
      repeat:-1,
      yoyo:true,
      scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        start: "top 20%",
         end:"top 0%",
    }

    
    })
  
   
  })

  useGSAP(()=>{
    
    gsap.to("#about",{
      background:"#700d22",
      duration:2,
      scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        start: "top 10%",
         end:"top 0%",
         scrub:2,
         
    }

    })
  
   
  })
  
    return (
        <section id='about' className=' .about lg:w-full max-xl:max-h-full md:w-full h-[110vh] bgskill max-sm:h-full '>
    <div>
    <h1 className='p-6 pt-8 text-6xl font-bold text-center '> About me</h1>
    <p className='p-8 px-16 text-lg font-["Mulish"] max-sm:text-sm max-md:text-wrap'>Hi my name is Fatima Saleem. Curently a university student doing BSCS. Taking advantage of being an online student. I started to learn coding
      from very first day of my university. With time coding sarted to become more interesting to me. I have build my good skills in "Frontend Developmet". It took 1 years to understand and learn about it.
      I am willing to learn more about web development and undertand how the things happens and to make more big projects in future. Thank you!    </p>
    </div>
    <div className='w-full h-[55%] grid grid-cols-2 max-sm:grid-cols-1'>
       <div className=' relative pngPics'>
       <img className='chai absolute bottom-0 z-20 left-52 pb-4 max-sm:relative' width={300} height={250} src={img}   alt="" />
       <img className='laptop absolute bottom-0 left-16 pb-4 ' width={300} height={250} src={laptop}   alt="" />
       {/* <h1 className="text absolute bottom-44 left-32 pb-4 text-lg font-bold">Time to <br /> code . . .</h1> */}
       <img className='leaf absolute bottom-0 z-10 left-40 pb-4 max-sm:appearance-none rotate-[350deg]' width={250} height={250} src={leaf}   alt="" />
    </div>

       <div className=' p-5 px-14 max-sm:px-3'>
        <h1 className='font-semibold text-xl'>Education</h1>
        <h3 className='font-semibold'>Bachelor of science in computer science</h3>
        <h5 className='text-sm'>Virtual University of Pakistan ,lahore, punjab
       <br /> Continue <br />GPA: 3.4</h5>
       
       <h3 className='font-semibold mt-9'>Lives in:</h3>
       <h5 className='text-sm'> Lahore,Pakistan.</h5> 
       

       </div>
    </div>

  </section>
    )
}

export default About
