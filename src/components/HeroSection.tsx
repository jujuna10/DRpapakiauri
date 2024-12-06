import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center gap-16 lg:gap-32 w-full translate-x-[-5%] '>
        {/* image */}
        <div className='w-[80%] sm:w-[32%] xl:w-[20%]'>
            <Image src='/photo.png' width={100000} height={100000} alt='photo' className='rounded-[20px] w-[100%] sm:h-auto h-[350px]' />
        </div>

        {/* text */}
        <div className='w-[80%] sm:w-[25%] flex sm:flex-col justify-center sm:translate-x-0 gap-5 md:gap-12'>
            <h1 className='text-text text-[20px] md:text-[35px] z-0 2xl:text-[45px] max-w-[35%] sm:max-w-[120%] lg:max-w-[90%] flex gap-x-5 flex-wrap'>Let&apos;s Make An <span className='text-appopintment'>Appointment</span> with <span className='text-doctor font-bold'>Dr.Nika</span></h1>
            <div className='flex flex-col gap-5 justify-center items-center lg:justify-start md:flex-row flex-wrap'>
              <button className='bg-button text-white rounded-[4px] xl:w-[28%] w-[100%] sm:w-[70%] py-1 text-[15px]'>BOOK NOW</button>
              <button className='border-[1px] border-border bg-[rgb(211,237,242)] xl:w-[28%] w-[100%] px-4 sm:w-[70%] py-1 rounded-[5px] text-lear'>LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection