import React from 'react'

function Experience() {

    type experince = {
        year: string,
        work: string
    }

    const experiencee: experince[] =[
        {year:"2019-2020",work:'ღუდუშაურის კლინიკა'},
        {year:"2020-2021",work:'ტრავმატოლოგიის ცენტრი'},
        {year:"2022 - დღემდე",work:'რეჰაბი'},
        {year:"2022-2022",work:'სითი-ფიზიო'},
        {year:"2022 - დღემდე",work:'ფეხბურთის ფედერაცია'},
        {year:"2023-2024",work:'ფენიქსი'},
        {year:"2024 - დღემდე",work:'სანმედი'}

    ]

  return (
    <div id='გამოცდილება' className='flex flex-col gap-12 items-center  translate-x-[-7%] sm:translate-x-[0%]'>
        <h1 className='text-[35px] text-blue-900 font-bold'>გამოცდილება</h1>
        <div className='w-[65%] flex flex-col gap-12 justify-center'>
            {experiencee.map((item:experince, index: number) => (
                <div key={index} className={`flex flex-row justify-between ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className='w-[20%] sm:w-[10%] bg-[rgb(213,237,241)] flex justify-center items-center rounded-full'>
                        <p className='text-[30px] amd:text-[35px] text-gray-500'>0{index + 1}</p>
                    </div>

                    <div className={`flex flex-col w-[50%] gap-2 ${index % 2 === 1 ? 'items-end' : ''}`}>
                        <p className={`text-[17px] ${index % 2 === 1 ? 'translate-x-[-10%]' : ''}`}>{item.year}</p>
                        <p className={`text-[17px] hover:text-blue-700 duration-200 hover:cursor-pointer ${item.work === 'ტრავმატოლოგიის ცენტრი' ? 'sm:max-w-[50%]' : ''}}`}>{item.work}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience