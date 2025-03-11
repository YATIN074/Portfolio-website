import React from 'react'

const AboutPage = () => {
  return (
    <div className='ml-8 flex flex-col gap-4'>
        <div className='text-3xl style-script-regular'>About me</div>
        <p className='text-lg fraunces'>Hello! I’m a passionate Frontend Developer with a strong foundation in creating beautiful, responsive, and user-friendly web applications. I thrive on turning ideas into interactive, efficient, and elegant digital experiences.<br/> With a keen eye for detail and a love for clean code, I focus on building interfaces that are not only visually appealing but also functional and accessible.</p>
        <div className=' grid grid-cols-2 gap-4 m-8'>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Name : </span> Yatin Goyal</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Phone : </span> (+91) 86996 76233</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Experience : </span> 6+ Months</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Nationality : </span> Indian</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Email : </span> yatingoel107@gmail.com</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Freelance : </span> Available</p>
            <p className='text-2xl'><span className='text-white/60 text-xl'>Languages : </span> English,Hindi,Punjabi</p>

        </div>
    </div>
  )
}

export default AboutPage