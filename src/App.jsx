import { useEffect, useRef, useState } from 'react'
import Skills from './sections/Skills'
import About from './sections/About'
import Contact from './sections/Contact'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Background from './sections/Background';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './sections/Projects';


function App() {
  const h1Ref = useRef(null);
  gsap.registerPlugin( ScrollTrigger,);

 
  
 useGSAP(()=>{
  gsap.from(h1Ref.current,{
    y:50,
    opacity:0,
    duration:1,
  })

  gsap.from("nav",{
    y:400,
    duration:1.2,
  })
  gsap.from(".bg",{
    x:-100,
    duration:0.5,
  })
  gsap.to(".skill",{
    x:-700,
    duration: 1.2,
    scrollTrigger:{
      trigger:h1Ref.current,
      scroll:"body",
      start: "top 0%",
       end:"top 70%",
       scrub:2
  }
  })
})


  return (
   <main className='min-w-screen-sm scroll-smooth'>
    <nav className='fixed right-2'>
       <div className='flex justify-between items-center flex-col bottom-0 bg-orange-700 gap-1 '></div>
       <h1 className='text-transparent'>h</h1>
       
        
      
      
       <a  className='flex group' href="#home">
       <span className='h-6 w-20 mt-2 rounded-xl px-1 font-medium opacity-0 bg-orange-700 group-hover:opacity-100'>Home</span>
        <svg  className='m-1 ' width={30} height={30} viewBox="0 0 24 24" fill="#c2410c" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267" stroke="white" strokeWidth="3.4" strokeLinecap="round"></path> </g></svg>
       </a>
       <a className='flex group' href="#skills">
       <span className='h-6 w-20 mt-2 rounded-xl px-1 font-medium  opacity-0 bg-orange-700 group-hover:opacity-100'>Skills</span>
       <svg className='m-1'  width={30} height={30} viewBox="0 0 24 24" fill="#c2410c" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267" stroke="white" strokeWidth="3.4" strokeLinecap="round"></path> </g></svg>
       </a>
       <a className='flex group' href="#projects">
       <span className='h-6 w-20 mt-2 rounded-xl px-1 font-medium  opacity-0 bg-orange-700 group-hover:opacity-100'>Projects</span>
       <svg className='m-1' width={30} height={30}  viewBox="0 0 24 24" fill="#c2410c" xmlns="http://www.w3.org/2000/svg" transform="rotate(280)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267" stroke="white" strokeWidth="3.4" strokeLinecap="round"></path> </g></svg>
       </a>
       <a className='flex group' href="#about">
       <span className='h-6 w-20 mt-2 rounded-xl px-1 font-medium  opacity-0 bg-orange-700 group-hover:opacity-100'>About</span>
       <svg className='m-1' width={30} height={30} viewBox="0 0 24 24" fill="#c2410c" xmlns="http://www.w3.org/2000/svg" transform="rotate(30)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267" stroke="white" strokeWidth="3.4" strokeLinecap="round"></path> </g></svg>
       </a>
       <a className='flex group' href="#contact">
       <span className='h-6 w-20 mt-2 rounded-xl px-1 font-medium opacity-0 bg-orange-700 group-hover:opacity-100'>Contact</span>
       <svg className='m-1' width={30} height={30} viewBox="0 0 24 24" fill="#c2410c" xmlns="http://www.w3.org/2000/svg" transform="rotate(30)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267" stroke="white" strokeWidth="3.4" strokeLinecap="round"></path> </g></svg>
       </a>   
     </nav>
<section id='home' className='lg:w-full md:w-full h-full  bgskill'>
    
     <div className='py-16 px-32 flex flex-col gap-2 max-sm:px-3'>
      <div className='w-[250px] h-[250px] bg m-4'></div>
       <h2 ref={h1Ref} className='name text-5xl font-normal max-sm:text-2xl   '>Fatima Saleem</h2>
       <h1 className='skill text-6xl font-bold mx-1 font-["Mulish"]'>Frontend Developer</h1>
        <button className='p-3 w-52   bg-gray-200 bg-opacity-20 rounded-2xl hover:bg-orange-700 duration-2 hover:border-white '>
          <a href='#contact' className='text-white text-xl font-semibold'>Explore</a>
        </button>
     </div>
    
    </section>
    
    <Skills/>
    

  <Projects/>

  <About/>
  
 

 
  <Background/>
  <Contact/>

   </main>
  )
}

export default App
