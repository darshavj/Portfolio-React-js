import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import photo from '../assets/dar.jpg'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b bg-[#0a192f] to-gray-800 '>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
    <div className='flex flex-col justify-center  h-full '>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>
    DARSHA VJ
  </h1>
          
          <h2 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>I'm a  Python with React Full Stack Developer.</h2>
    <p className='text-gray-500 py-4 max-w-md'>I’m a  Python with React full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on
        building responsive full-stack web applications.</p>
    <div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
    View Projects
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 '/>
    </span>
    </button>
    </div>


    </div>
    <div>
    <img src={photo} alt='profile' className='rounded-2xl mx-auto w-full'/>
    </div>
    </div>
    
    
    </div>
  )
}

export default Home