import React from 'react'
import reacting from '../assets/react.jpg';
import html from '../assets/html.jpg';
import css from '../assets/css.png';
import js from '../assets/js.jpg';
import sql from '../assets/sql.jpg';
import python from '../assets/python.png';
import dj from '../assets/dj.jpg';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 py-5'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Skills</p>
         <p className='py-4'> These are the technologies I've worked with</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#f35d1d] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={html}alt='HTML icon'/>
          <p className='my-4'>HTML</p>

        </div>

        <div className='shadow-md shadow-[#6d9bd3] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='HTML icon'/>
        <p className='my-4'>CSS</p>

      </div>    

      <div className='shadow-md shadow-[#c1cf21] hover:scale-110 duration-500'>
      <img className='w-20 mx-auto' src={python}alt='HTML icon'/>
      <p className='my-4'>PYTHON</p>

    </div>    

    <div className='shadow-md shadow-[#bb9e0b] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={js} alt='HTML icon'/>
    <p className='my-4'>JAVASCRIPT</p>

        </div> 
        <div className='shadow-md shadow-[#6cdd38] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={sql}alt='HTML icon'/>
        <p className='my-4'>SQL</p>

    </div> 

    <div className='shadow-md shadow-[#eff1f4] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={dj}alt='HTML icon'/>
    <p className='my-4'>DJANGO</p>

      </div>   
      
 
   <div className='shadow-md shadow-[#199aa6] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={reacting}alt='HTML icon'/>
    <p className='my-4'>REACT</p>

</div>


      </div>
    </div>
      
    </div>
  )
}

export default Skills
