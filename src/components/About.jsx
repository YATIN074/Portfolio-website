import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import AboutPage from '../pages/AboutPage'
import ExperiencePage from '../pages/ExperiencePage'
import SkillsPage from '../pages/SkillsPage'

const About = () => {
  const {show,setShow} = useContext(AppContext)
  return (
    <div id='about' className=' max-w-[1180px] mx-auto p-4 scroll-mt-20'>
      <div className='flex flex-row-reverse items-center gap-5 text-3xl font-bold'>
          <div><span className='source-code-pro text-xl text-[#0ed7ff]'>02. </span> About</div>
          <div className='bg-white/20 w-[500px] h-[0.1px]'></div>
      </div>
      <div className='flex my-12 items-center'>
        <div className=' flex flex-col gap-4 min-w-[300px]'>
          <button onClick={()=>(setShow('About'))} className={`text-lg tracking-widest text-[#0ed7ff] border rounded-xl p-3 cursor-pointer border-[#0ed7ff] ${show === 'About' ? 'bg-[#0ed7ff] text-[#001f3b]' :'hover:bg-[#0ed7ff]/20 hover:text-[#0ed7ff] '}  transition-all duration-100`}>About</button>
          <button onClick={()=>(setShow('Experience'))} className={` text-lg tracking-widest text-[#0ed7ff] border rounded-xl p-3 cursor-pointer border-[#0ed7ff] ${show === 'Experience' ? 'bg-[#0ed7ff] text-[#001f3b]' :'hover:bg-[#0ed7ff]/20 hover:text-[#0ed7ff] '} transition-all duration-100`}>Experience</button>
          <button onClick={()=>(setShow('Skills'))} className={` text-lg tracking-widest text-[#0ed7ff] border rounded-xl p-3 cursor-pointer border-[#0ed7ff] ${show === 'Skills' ? 'bg-[#0ed7ff] text-[#001f3b]' :'hover:bg-[#0ed7ff]/20 hover:text-[#0ed7ff] '} transition-all duration-100`}>Skills</button>
        </div>
        <div className='min-h-[550px] '>
          {
            show === 'About' && 
            <AboutPage/>
          }
          {
            show === 'Experience' && 
            <ExperiencePage/>
          }
          {
            show === 'Skills' && 
            <SkillsPage/>
          }
        </div>
      </div>
    </div>
  )
}

export default About