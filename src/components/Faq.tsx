'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Faq() {

    const [open,setOpen] = useState<number | null>(null)

    type faq = {
        question: string,
        answer: string
    }

    const questions: faq[] = [
        {question: 'რამდენი ხანი გრძელდება მასაჟი?', answer: 'დამოკიდებულია პაციენტზე'},
         {question: 'რომელი ვარჯიშები უკეთდება პაციენტს', answer: 'დამოკიდებულია თუ რა პრობლემა აქვს პაციენტს.ყველასთვის სხვადასხვა ვარჯიშებიი კეთდება'},
        {question: 'რა მოვამზადო მასაჟის წინ?', answer: 'განსაკუთრებული მომზადება არ არის საჭირო'},
        {question: 'შესაძლებელია თუ არა მასაჟი სახლში?', answer: 'დიახ,სახლშიც შესაძლებელია'},
    ]

    const handleOpen = (index: number): void => {
        setOpen(open === index ? null : index)
    }

  return (
    <div className='flex flex-col items-center gap-8 justify-center'>
        <h1 className='text-[35px] text-blue-900 font-bold'>FAQ</h1>
        <div className='bg-[rgb(200,252,253)] w-[80%] sm:w-[50%] p-[2%] flex flex-col gap-5 rounded-[50px]'>
            {questions.map((item: faq, index: number) => (
                <div key={index} className='flex flex-col gap-5'>
                    <div className='bg-white p-2 flex justify-between items-center rounded-[20px]'>
                        <p>{item.question}</p>
                        {/* <button onClick={() => handleOpen(index)}>see more</button> */}
                        <Image src='/arrow.png' width={35} height={35} alt='arrow' onClick={() => handleOpen(index)} className={`duration-300 rotate-180 ${open === index ? 'rotate-[0deg]' : ''}`} />
                    </div>
                    {open === index && <p className='duration-300 bg-[rgb(250,235,215)] p-[5%] sm:p-[2%] rounded-[20px]'>{item.answer}</p>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq