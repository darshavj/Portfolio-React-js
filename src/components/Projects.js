import React from 'react'
import {data} from './Data.js';





const Projects = () => {
    const project=data

  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>


<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.img})` }}
    className="shadow-lg shadow-[#172332] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
    
    <div className="opacity-0 group-hover:opacity-100  ">
      <span className="text-3xl font-bold text-blue-900 tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-600 text-gray-900 font-bold text-lg">
            Code
          </button>
        </a>
        
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-600 text-gray-900 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>

  )
}

export default Projects