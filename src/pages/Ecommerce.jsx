import React from 'react'

function Ecommerce() {
    return (
        <div className='w-full bg-black  p-10 sm:min-w-[40rem] md:min-w-[48px] flex justify-center text-white'>
         
       
        <div   className="w-[80vw]   rounded-lg flex-col  backdrop-filter backdrop-blur-lg bg-opacity-35 p-4 my-14 justify-between sm:flex-none lg:flex sm:h-screen'">
          
         <img
        src='https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt="Laptop"
        className="h-[350px] w-full rounded-md object-cover p-4"
      />
      <h1 className="mx-4  font-semibold  text-3xl  ">E-commerce website</h1>
      <h3 className='text-2xl  mt-4 ml-7 '>Link</h3>
      <a className='text-yellow-400 p-2  mx-4  ' href="https://vercel.live/link/ecommerce-app-five-gilt.vercel.app?via=project-dashboard-alias-list&p=1"> https://vercel.live/link/ecommerce-app-five-gilt.vercel.app?via=project-dashboard-alias-list&p=1</a>
      <h3 className='text-2xl  mt-4 ml-7 '>Description:</h3>
        <p className="mt-1 mx-4 text-lg px-3 mb-4 ">
          This is a basic e-commerce website which focus on the main features. Its more based on functionality of e-commerce website.
          It took 4 days to cover. Hope you will like it.
        </p>
        <h3 className='text-lg font-semibold mt-4 ml-7 '>Concepts coverved in this project</h3>
        <ul className='list-disc ml-10'>
        <li>Responsiveness</li>
          <li>API handling</li>
          <li>Search functionality</li>
          <li>Scroll pagination</li>
          <li>Routing</li>
          <li> Add cart, delete Cart</li>
          <li>Reactjs ,tailwind</li>
          
        </ul>

       </div>
    
 
  
</div>
    )
}

export default Ecommerce
