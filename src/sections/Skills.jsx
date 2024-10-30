import React from 'react'
import { motion } from "framer-motion"


function Skills() {
  
    return (
       
            <section id='skills' className='lg:w-[98.5vw] md:w-full lg:h-full md:h-[100vh] flex flex-col justify-center  p-7  '>
                    <motion.h1 initial={{x:-700}}
                     whileInView={{x:0, transition:{duration:1.5} }} 
                      className=' p-6 mt-4 text-6xl font-bold text-center mr-7 '> Skills</motion.h1>
  <div className=' max-md:hidden max-sm:hidden flex gap-5 p-20 justify-center '  >
    <div className='item1    w-[150px]  max-sm:w-[70px]   '>
      <img  width={150} height={200} className=''  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" alt="" />
      <input type="range" max={100} value={80} className='w-full' readOnly />
    </div>
    <div className='item2  w-[150px] h-[150px] max-sm:w-[70px] object-cover '>
      <img  width={150} height={150}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxhwg_X-XpKv5p4iXbwtEoUlkqQAkzJ1zsKqShwZkNhAkFcahVitQ8ydOKpGfbYCjshg&usqp=CAU" alt="" />
      <input type="range" max={100} value={70} className='w-full' readOnly />
    </div>
    <div className='item3   w-[150px]  max-sm:w-[70px]  '>
      <img  width={150} height={200} src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png" alt="" />
      <input type="range" max={100} value={80} className='w-full' readOnly />
    </div>
    <div className='item4   w-[150px]  max-sm:w-[70px]  '>
      <img  width={150} height={200} src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="" />
      <input type="range" max={100} value={20} className='w-full' readOnly />
    </div>
    <div className='item5   w-[150px] max-sm:w-[70px]  '>
      <img  width={150} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDVXC1dKIQxWkN9r9hBZElgawTxpq1nwAw&s" alt="" />
      <input type="range" max={100} value={80} className='w-full' readOnly />
    </div>
  </div>

    <div className='mx-auto px-9 flex flex-col justify-between items-center '>

      <div className='pb-20 text-xl'>
        <h3 className='text-white font-bold text-center pr-36 max-sm:pr-3 max-md:pr-4'></h3>
        <ul className='grid gap-x-36 grid-cols-4 font-normal max-sm:grid-cols-2 max-sm:gap-5 max-md:grid-cols-2 max-md:gap-7'>
          <li className=' list-disc'>HTML</li>
          <li className=' list-disc'> CSS, GSAP </li>
          <li className=' list-disc'>Java Script </li>
          <li className=' list-disc'>React js</li>
          <li className=' list-disc'>Basic Github </li>
          <li className=' list-disc'>Bootstrap</li>
        </ul>
      </div>

    </div>
     
    </section>
    )
}

export default Skills
// className='sm:-[100px] sm:h-[100px]'