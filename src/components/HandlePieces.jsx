import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const HandlePieces = ({piece}) => {
    const handleOpenLink =()=>{
        window.open(piece.url,'blank');
    }
    const handleOpenRepo = ()=>{
        window.open(piece.repo,'blank')
    }
  return (
    <div className={`flex justify-between mb-24 mt-8 ${piece.id % 2===0 ? 'flex-row':'flex-row-reverse'}`}>
        <div className='w-[1200px] cursor-pointer '>
            <img src={piece.image} onClick={handleOpenLink} className='rounded-2xl'></img>
        </div>
        <div className={`flex z-2 flex-col justify-center gap-4 w-[800px] ${piece.id%2===0 ? 'text-right':'text-left'}`}>
            <div className='text-[#64f2ff]'>Featured Project</div>
            <div className='text-4xl font-bold hover:text-[#64f2ff] cursor-pointer' onClick={handleOpenLink}>{piece.title}</div>
            <div className='bg-[#173d7963] text-[#ffffff89] p-6 rounded-2xl'>{piece.desc}</div>
            <div className={`flex text-sm p-2 text-[#ffffff]/70 gap-2 ${piece.id%2===0 ?'justify-end':'justify-start'}`}>{piece.skills.map(skill=>(
                <div className='bg-white/30 p-1 rounded-md'>{skill}</div>
            ))}</div>
            <div className={`flex items-center gap-5 px-2 py-2 text-xl ${piece.id%2===0 ? 'justify-end':'justify start'} `}>
                <button onClick={handleOpenRepo} className='cursor-pointer'><FiGithub/></button>
                <button onClick={handleOpenLink} className='cursor-pointer'><FaExternalLinkAlt/></button>
            </div>
        </div>
    </div>
  )
}

export default HandlePieces