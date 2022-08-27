import React from 'react'
import heroImgSM from '../assets/hero-img-sm.png'

const Hero = () => {
    return (
        <div className='relative flex flex-col justify-center h-[752px]  md:h-[599px]'>
            <div className='md:w-[455px] w-[350px] flex flex-col justify-center'>
                <h1 className='text-primaryBlue md:text-5xl text-4xl font-extrabold md:mr-5 xl:mr-0'>Maximize skill, minimize budget</h1>
                <p className='text-primaryGrey my-8 md:my-11 md:mr-8'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <button className='md:w-[146px] w-[188px] h-[60px] rounded-[30px] bg-gradient-to-b from-gradOrange to-gradPink text-white font-semibold drop-shadow-lg'>Get Started</button>
            </div>
            <img className='md:hidden mt-16' src={heroImgSM} alt="/" />
        </div>
    )
}

export default Hero