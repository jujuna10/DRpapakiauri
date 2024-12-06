import React from 'react'
import Image from 'next/image'
import phone from '../../public/phone-call.png'
import gmail from '../../public/gmail-logo.png'
import fb from '../../public/fb.png'
import instagram from '../../public/instagram.png'



function Footer() {


    const text: string[] = ['597 04 18 25','Papakiaurinika@gmail.com']
    const images = [phone,gmail]
    const images2 = [fb,instagram]


  return (
    <div className='flex bg-[rgb(213,237,241)] justify-center pt-12 pb-7'>
        <div className='w-[80%] flex md:justify-between flex-col md:flex-row gap-12 justify-center items-center'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-footertext text-[25px]'>დამიკავშირდი</h1>
                <div className='flex flex-col gap-5'>
                    {text.map((item,index: number) => (
                        <div key={index} className='flex items-center gap-7'>
                            <div className='w-[35px] h-[35px] bg-[rgb(236,228,228)] rounded-[50%] flex justify-center items-center'>
                                <Image src={images[index]} width={10000000000} height={1000000000} alt={`${text[index]}`} className='w-[35%] filter brightness-200 contrast-50' />
                            </div>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* https://www.facebook.com/nika.papkiauri */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-footertext text-[25px]'>სოციალური ქსელები</h1>
                <div className='flex gap-12'>
                    {images2.map((item,index: number) => (
                            <div key={index} className='flex items-center gap-7'>
                                <div className=' w-[38px] h-[38px] bg-[rgb(236,228,228)] rounded-[50%] flex justify-center items-center'>
                                    <a href={`${index === 0 ? 'https://www.facebook.com/nika.papkiauri' : ''}`} className='flex justify-center items-center'><Image src={item} width={10000000000} height={1000000000} alt={`${text[index]}`} className='w-[45%] filter brightness-200 contrast-50' /></a>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer