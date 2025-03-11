import React from 'react'
import { exp } from '../datas/Exp'
const ExperiencePage = () => {
  return (
    <div className='ml-8 flex flex-col gap-4'>
        <div className='text-4xl my-3 style-script-regular'>My Experience</div>
        <div className='text-lg fraunces'>With hands-on experience in various aspects of web development, I have contributed to several projects, showcasing my skills in  frontend development.</div>
        <div className='grid grid-cols-2 gap-4 my-4 max-h-[300px] overflow-y-scroll custom-scrollbar p-4'>
            {
                exp.map((work)=>(
                    <div className='flex flex-col gap-4 bg-[#0ed7ff]/10 p-4 rounded-2xl'>
                        <div>
                            <div className='text-[#0ed7ff] text-xl tracking-wider'>{work.startTime}  -  {work.endTime}</div>
                            <div className='text-2xl mt-2 font-bold source-code-pro'>{work.role}</div>
                        </div>
                        <ul className=' list-disc m-4'>
                            <li className='marker:text-[#0ed7ff] text-white/70 bebas-neue-regular text-lg'>{work.company}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExperiencePage