import React from 'react'
import blog from "../assets/blog.jpg"

function Blogapp() {
    return (
        <div className='w-full bg-black p-10 sm:min-w-[40rem] md:min-w-[48px] flex justify-center text-white'>
        <div>
         
       
              <div   className="w-[80vw]   rounded-lg flex-col  backdrop-filter backdrop-blur-lg bg-opacity-35 p-4 my-14 justify-between sm:flex-none lg:flex sm:h-screen'">
                
               <img
              src={blog}
              alt="Laptop"
              className="h-[350px] w-full rounded-md object-cover p-4"
            />
           
            <h1 className="mx-4  font-semibold  text-3xl  ">Blog App</h1>
            <h3 className='text-2xl  mt-4 ml-7 '>Link</h3>
            <a className='text-yellow-400 p-2  mx-4  ' href="https://vercel.live/link/blog-app-lyart-two.vercel.app?via=project-dashboard-alias-list&p=1"> https://vercel.live/link/blog-app-lyart-two.vercel.app?via=project-dashboard-alias-list&p=1 </a>
            <h3 className='text-2xl  mt-4 ml-7 '>Description:</h3>
              <p className="mt-1 mx-4 text-lg px-3 mb-4 ">
                This project covers all blog website features. It took 1 week to complete this project. Use Firebase for login and storage functionality working as backend. Deployed project in Verce. Hope you will like this project   
              </p>
              <h3 className='text-lg font-semibold mt-4 ml-7 '>Concepts coverved in this project</h3>
              <ul className='list-disc ml-10'>
              <li>Responsiveness</li>
                <li>API handling</li>
                <li>Search functionality</li>
                <li>Routing</li>
                <li>Firebase for backend </li>
                <li>Custom hook</li>
                <li>Styling with Tailwind</li>
                <li> Gsap</li>
              </ul>

             </div>
          
       
        </div>
      </div>
    )
}

export default Blogapp
