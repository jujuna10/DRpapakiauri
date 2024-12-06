import React from 'react'
import Image from 'next/image'
import time from '../../public/7.png'
import avaiable from '../../public/avaiable.png'
import experience from '../../public/experience.png'
import online from '../../public/online.png'


function Services() {

    const text: string[] = ['24/7 დახმარებისთვის მზად','ყოველთვის ხელმისაწვდომი','მრავალ წლიანი გამოცდლება','ონლაინ კონსულტაცია']
    const images = [time,avaiable,experience,online]

  return (
    <div id='სერვისები' className='flex flex-col gap-12 justify-center items-center'>
        <h1 className='text-[35px] text-blue-900 font-bold'>სერვისები</h1>
        <div className='flex flex-col gap-5'>
            {/* <div className='flex justify-center items-center gap-20 w-full flex-wrap'>
                {images.map((item,index) => (
                    <div key={index} className='flex flex-col gap-4 justify-center items-center w-full'>
                        <div className={`w-full h-[60%] rounded-[100%] flex justify-center items-center  bg-gradient-to-b from-white to-[rgb(224,244,245)]`}>
                            <Image src={item} width={1000000000} height={100000000000} alt={`${text[index]}`} className='w-[20%] h-[20%]' />
                        </div>
                        <p className={`max-w-[20%] text-[12px] translate-x-[-90%]`}>{text[index]}</p>
                    </div>
                ))}
            </div> */}

            <div className='grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-12 justify-center items-center w-full ml-9'>
                {images.map((item,index) => (
                    <div key={index} className='flex flex-col gap-4 justify-center items-center w-[65%]'>
                        <div className={`w-full h-[60%] rounded-[100%] flex justify-center items-center  bg-gradient-to-b from-white to-[rgb(224,244,245)]`}>
                            <Image src={item} width={1000000000} height={100000000000} alt={`${text[index]}`} className='w-[120%] h-[100%]' />
                        </div>
                        <p className={`max-w-[20%] text-[12px] translate-x-[-100%]`}>{text[index]}</p>
                    </div>
                ))}
            </div>
            {/* <div className='flex gap-11 justify-center'>
                {text.map((item,index) => (
                    <p key={index} className={`max-w-[20%] text-[12px] ${index == 0 ? 'translate-x-[-22%]' : 'translate-x-[15%]'} ${index == 1 ? 'translate-x-[-0.1%]' : 'translate-x-[20%]'}`}>{item}</p>
                ))}
            </div> */}
        </div>
    </div>
  )
}

export default Services