'use client'
import React, { useState } from 'react';


function Navbar() {
    const [burgerMenu,setBurgerMenu] = useState<boolean>(false)
    const [rotate,setRotate] = useState<boolean[]>([false,false])
    const links: string[] = ['მთავარი', 'ჩემს შესახებ', 'სერვისები', 'გამოცდილება'];
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleMenu = (): void => {
        setBurgerMenu(!burgerMenu);
        setRotate([!rotate[0], !rotate[1]])
    };

    return (
        <div id='მთავარი' className='flex lg:justify-center relative justify-evenly w-full items-center gap-[60%] pl-[10%] lg:pl-0 lg:gap-[10%] pt-12 lg:translate-x-[-8%] translate-x-0 xl:translate-x-[-10%] '>
            <h1 className='font-dancing[0] text-[35px] text-home font-bold'>dr.nika</h1>
            <div className='justify-center items-center gap-12 hidden lg:flex'>
                {links.map((item: string, index: number) => (
                    <p onClick={() => scrollToSection(item)} key={index} className={`${index === 0 ? 'text-home font-bold' : 'text-links'} hover:cursor-pointer`}>{item}</p>
                ))}
                <button onClick={() => scrollToSection('contact me')} className='bg-button text-white px-5 py-2 rounded-[5px]'>დამიკავშირდი</button>
            </div>

            <div className='flex lg:hidden flex-col gap-2 hover:cursor-pointer pr-24 translate-x-[-25%] sm:translate-x-[-50%]' onClick={handleMenu}>
                <div className={`w-[4px] h-[4px] px-6 opacity-100 rounded-[50px] bg-black transition-transform duration-700 ${rotate[0] ? 'rotate-[45deg]' : 'rotate-0'}`}></div>
                <div className={`w-[4px] h-[4px] px-6 rounded-[50px] bg-black transition-opacity duration-700 ${rotate[0] ? 'opacity-0' : 'opacity-100 rounded-[50px]'}`}></div>
                <div className={`w-[4px] h-[4px] px-6 opacity-100 rounded-[50px] bg-black transition-transform duration-700 ${rotate[1] ? 'rotate-[-45deg] translate-y-[-570%]' : 'rotate-0 translate-y-0'}`}></div>
            </div>



            <div className={`absolute bg-[rgb(204,233,237)] px-[4%] z-50 py-[2%] mr-24 rounded-[20px] opacity-100 top-[120%] translate-x-[1000%] lg:translate-x-[2000%] transition-transform duration-700 ${burgerMenu ? 'translate-x-[50%] sm:translate-x-[70%] md:translate-x-[100%]' : ''}`}>
                {burgerMenu ? (
                    <div className='flex flex-col gap-2 z-50 opacity-100'>
                        {links.map((item: string, index: number) => (
                            <p onClick={() => scrollToSection(item)} key={index} className={` text-links hover:cursor-pointer`}>{item}</p>
                        ))}
                        <button onClick={() => scrollToSection('contact me')} className='text-links'>დამიკავშირდი</button>
                    </div>
                ) : (
                    <div className='z-[-10]'></div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
