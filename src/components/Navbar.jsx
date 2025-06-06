import React from 'react'
import { useContext } from "react"
import { AppContext } from '../context/AppContext';
const Navbar = () => {
    const {show,setShow} = useContext(AppContext);
  return (
    <div className='sticky z-3 top-0 flex justify-between bg-[#001f3baa] backdrop-blur-lg items-center w-full px-10 py-2 '>
        <div>
            <a href='/' className=' style-script-regular'>Yatin<span className='text-[#0ed7ff]'>.</span></a>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex gap-10 text-[17px] items-center source-code-pro'>
                <a href='#home' className='hover:text-[#0ed7ff] cursor-pointer'><span className='text-[#64f2ff]'>01. </span>Home</a>
                <a href='#about'  onClick={()=>(setShow('About'))} className='hover:text-[#0ed7ff] cursor-pointer'><span className='text-[#64f2ff]'>02. </span>About</a>
                <a href="#project"  className='hover:text-[#0ed7ff] cursor-pointer' ><span className='text-[#64f2ff]'>03. </span>Projects</a>
                <a href='#contact'  className='hover:text-[#0ed7ff] cursor-pointer'><span className='text-[#64f2ff]'>04. </span>Contact</a>
            </ul>
        </div>
        <div className='px-3'>
            <a href='https://drive.google.com/file/d/1BcsgIZhVRKo0YJLFmG2kvvIl-m4aO01d/view?usp=sharing' target='blank' className=' text-[#64f2ff]  hover:shadow-[3px_3px_0px_rgba()] shadow-[#64f2ff] hover:-translate-y-1 hover:-translate-x-1 border-[#64f2ff] tracking-widest rounded-md border px-3 py-2 transition-all duration-200'>Resume</a>
        </div>
    </div>
  )
}

export default Navbar