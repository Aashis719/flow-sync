'use client'
import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='homeSection p-10  pt-35 md:pb-40  flex justify-around flex-wrap bg-gradient-to-b from-blue-200  to-white min-h-screen bg-fixed gap-3'>
            <div className='pt-20 md:pt-30 homeText '>
            <h1 className=' text-5xl md:text-6xl text-center font-bold leading-snug md:text-left'> <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text'>AI</span>-Powered Automated <br /><span > Workflows!</span></h1>
            <p className='text-xl p-2 text-center md:text-left  font-semibold  '>Automate repetitive tasks,  <span className=' font-semibold'>collaborate</span> seamlessly, and <br />make data-driven decisions with FlowSync.</p>
            <div className="buttonswalla flex gap-5  justify-self-center md:justify-self-start pt-5 pb-10">
            <button className='text-lg  md:text-xl'><a href="#pricing" className='border-2 py-1 px-2 md:px-3 border-purple-500 bg-purple-500 text-white  rounded  cursor-pointer hover:scale-103 hover:border-2  hover:border-purple-500 transition-all duration-300 ease-in hover:bg-purple-500 hover:text-white'>Try for Free</a></button>

            <button className='text-lg  md:text-xl'><a href="#features" className='border-2 py-1 px-2 md:px-3 border-purple-500  rounded   cursor-pointer hover:scale-103 hover:border-2  hover:border-purple-500 transition-all duration-300 ease-in hover:bg-purple-500 hover:text-white'>Watch Demo</a></button>
            </div>
            
            </div>
            <div className='mt-30 relative md:p-2'>
                <img src="assets/work.webp" alt="" className='w-lg transition-all hover:scale-105 hover:drop-shadow-2xl  relative z-50 cursor-pointer '/>
                <img src="assets/work3.webp" alt="" className='w-xl transition-all hover:scale-105 hover:drop-shadow-2xl absolute bottom-40 right-5 z-10 hover:z-70 cursor-pointer '/>
            </div>
        </div>
    </div>
  )
}

export default Home