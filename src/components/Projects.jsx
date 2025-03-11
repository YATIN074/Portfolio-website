import React from 'react'
import data from '../datas/Works';
import HandlePieces from './HandlePieces';
const Projects = () => {
  return (
    <div id='project' className='mb-64 max-w-[1180px] mx-auto scroll-mt-20 '>
        <div className='flex items-center gap-5 text-3xl font-bold'>
            <div><span className='source-code-pro text-xl text-[#0ed7ff]'>03. </span> My Latest Works</div>
            <div className='bg-white/20 w-[500px] h-[0.1px]'></div>
        </div>
        <div>
            {
                data.map((piece)=>(
                    <HandlePieces piece={piece}/>
                ))
            }
        </div>
    </div>
  )
}

export default Projects