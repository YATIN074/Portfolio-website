import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id="contact" className="px-0 py-[60px] sm:py-[80px] md:py-[100px] max-w-[600px] text-center mt-[0px] mx-auto mb-[50px] md:mb-[0px]">
            <h2 className=" text-[#64f2ff] mx-0 mt-[10px] mb-[20px] w-full leading-[1.1]  text-lg tracking-wider"><span class="text-base relative bottom-0 -mb-[3px] mr-[5px] sm:mr-[10px] sm:mb-0">04.</span>Whats's Next?</h2>
            <h2 class="text-6xl mb-[10px] font-semibold leading-[1.1]">Get In Touch</h2>
            <p className="font-sans text-[#a09797] mt-10 text-lg leading-[1.5] tracking-wide">I am actively seeking new career opportunities, and my inbox is always open. Whether you have a job opportunity or if you just want to connect, feel free to reach out.</p>
            <div className="transition-all ease-in-out duratio-300 hover:-translate-x-1 hover:-translate-y-1 mt-[50px]">
                <a href="mailto:yatingoel107@gmail.com" className="font-mono text-[#64f2ff] bg-transparent border rounded-[4px] text-[14px] transition-all ease-in-out duration-300  px-7 hover:shadow-[3px_3px_0px_rgba()] shadow-[#64f2ff] py-4 tracking-widest" target="_blank">Say Hello</a>
            </div>
        </section>
        <div className='text-[#a09797] text-center mt-10 pb-5'>Yatin Goyal</div>
    </div>
  )
}

export default Contact