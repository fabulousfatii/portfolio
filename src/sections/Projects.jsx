import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Projects() {
    return (
        <section id='projects' className='w-full h-full py-11 bgProject  '>
        <div className='w-[80%] h-[80%] bg-transparent m-auto rounded-3xl border-2 bgProjectArea p-10 my-20'>
        <motion.h1 initial={{opacity:0}}
                     whileInView={{opacity:100, transition:{duration:1.5} }}  className=' m-4 text-6xl font-bold text-center mb-10 '> Projects</motion.h1>
        <div className='w-full flex gap-7 justify-center items-center flex-wrap '>

               <Link to={"/blogwebsite"}>
               <motion.div initial={{opacity:0}}
                     whileInView={{opacity:100, transition:{duration:1.5} }}  className='w-60 h-60 bg-white rounded-3xl project1 relative hover:bg-black duration-75 '>
                <h1 className='text-black text-center text-2xl font-bold px-4 pt-9 ' > Blog Website</h1>
                <h1 className='text-white text-center text-xl  font-bold  ' > See Deatails</h1>
                <p className='text-black text-center  font-bold py-1 px-4 '>A responsive Blog website made with firebase </p>
               </motion.div>
               </Link>

              <Link to={"/ecomerce"}>
              <motion.div initial={{opacity:0}}
                     whileInView={{opacity:100, transition:{duration:1.5} }}  className='w-60 h-60 bg-white group rounded-3xl project2  hover:bg-black duration-75'>
               <h1 className='text-black text-center text-xl font-bold px-4 pt-9 ' > E-commerce Website</h1>
               <h1 className='text-white text-center text-xl font-bold  ' > See Details</h1>
               <p className='text-black text-center  font-bold py-1 px-4 '>A simple e-commerce website focusing on main features </p>
              
               
               </motion.div>
              </Link>

          </div>
        </div>
      </section>
    )
}

export default Projects
