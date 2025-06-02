import React from 'react'
import profile from '../assets/hi-removebg-preview2.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='home' className='scroll-mt-20 max-w-[1180px] mb-50 w-full flex items-center justify-around mx-auto'>
      <div className='flex flex-col gap-y-12 pt-14 px-6 sm:px-20 lg:px-6 lg:max-w-[500px]'>
        <div>
          <h1 className='text-3xl sm:text-4xl font-extrabold leading-15 sm:leading-18'>Hey, There <br/> I'm <span className='text-[#64f2ff] text-4xl sm:text-6xl' >Yatin Goyal</span> <br/> Frontend Developer & DSA Enthusiast</h1>
        </div>
        <div className=' flex gap-x-12 gap-6 text-3xl xs:flex-row flex-col'>
          <a href='https://drive.google.com/file/d/1BcsgIZhVRKo0YJLFmG2kvvIl-m4aO01d/view?usp=sharing' target='blank' className='max-w-[220px] flex items-center gap-3 text-xl border py-3 px-5 hover:text-[#0ed7ff] hover:shadow-[3px_3px_0px_rgba()] shadow-[#64f2ff] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200'>Download CV
          <MdOutlineFileDownload className='text-3xl'/>
          </a>
          <div className='flex items-center'>
            <a href='https://github.com/YATIN074' target='blank' className=' hover:text-[#0ed7ff] hover:-translate-y-1 transition-all duration-300 p-2'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/yatin-goyal-135782212/' target='blank' className=' hover:text-[#0ed7ff] hover:-translate-y-1 transition-all duration-300 p-2'><FaLinkedinIn/></a>
          </div>
        </div>
        <div>
          <p className='max-w-[70%] text-md'>Creative and Detail-oriented <span className='font-bold uppercase'> Frontend Developer </span>passionate about building  user-friendly, responsive,& modern web experiences.</p>
        </div>
      </div>
      <div>
        <img src={profile} className='hidden lg:block w-90 h-90 rounded-full shadow-[0px_0px_35px_rgba(100,242,255,1)] p-3'/>
        
      </div>
      
    </div>
  )
}

export default Hero