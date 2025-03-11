import React from 'react'
import { FaHtml5,FaCss3,FaJs,FaReact,FaGit, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux,SiCplusplus } from "react-icons/si";
const SkillsPage = () => {
  return (
    <div className='ml-8 flex flex-col gap-6'>
        <div className='text-3xl style-script-regular'>My Skills</div>
        <p className='text-lg fraunces'>Possesses a robust skill set in HTML, CSS, TailwindCSS, JavaScript, and ReactJS, with a keen eye for detail and a passion for crafting seamless, responsive, and engaging web applications.</p>
        <div className='flex gap-8 text-6xl'>
        <FaHtml5 className='hover:text-[#0ed7ff]'/>
        <FaCss3 className='hover:text-[#0ed7ff]'/>
        <FaJs className='hover:text-[#0ed7ff]'/>
        <FaReact className='hover:text-[#0ed7ff]'/>
        <RiTailwindCssFill  className='hover:text-[#0ed7ff]'/>
        <FaGit className='hover:text-[#0ed7ff]'/>
        <FaGithub className='hover:text-[#0ed7ff]'/>
        <SiRedux className='hover:text-[#0ed7ff]'/>
        <SiCplusplus className='hover:text-[#0ed7ff]'/>
        </div>
    </div>
  )
}

export default SkillsPage