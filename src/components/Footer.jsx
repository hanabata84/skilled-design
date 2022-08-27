import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primaryBlue w-full h-[119px] flex justify-center items-center mt-16 md:mt-[100px]'>
            <div className='xl:w-[1112px] md:w-[849px] w-[388px] flex items-center justify-between'>
                <h2 className='text-white text-3xl font-bold'>skilled</h2>
                <button className='w-[146px] h-[60px] rounded-[30px] bg-gradient-to-b from-gradViolet to-gradPink text-white font-semibold drop-shadow-lg'>Get Started</button>
            </div>
        </div>
    )
}

export default Footer