import React from 'react'
import { BiRun } from 'react-icons/bi'
import { GiCube } from 'react-icons/gi'
import { BsCameraFill } from 'react-icons/bs'
import { MdDeviceHub, MdBusinessCenter } from 'react-icons/md'

const Cards = () => {
    return (
        <div className='xl:grid-cols-3 xl:grid-rows-2 md:grid md:gap-x-4 md:gap-y-6 md:h-auto md:grid-cols-2 md:grid-rows-3 flex flex-col justify-between h-[2070px]'>
            {/* Card popular courses */}
            <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[320px] w-[384px] h-[146px] rounded-[20px] bg-gradient-to-b from-gradOrange to-gradPink drop-shadow-lg md:mt-8'>
                <h3 className='text-white font-bold text-3xl px-8 pt-9 md:w-[300px] md:pt-14'>Check out our most popular courses!</h3>
            </div>
            {/* Card Animation */}
            <div className='relative h-[365px] flex flex-col'>
                <div className='absolute z-10 top-0 left-8 w-[70px] h-[70px] bg-gradient-to-b from-gradOrange to-gradPink rounded-full flex justify-center items-center'>
                    <BiRun className='text-white mr-1 mb-1' size={50} />
                </div>
                <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[320px] w-[388px] h-[320px] rounded-[20px] bg-white drop-shadow-lg mt-8'>
                    <div className='ml-8 mr-12 pt-[78px]'>
                        <h3 className='text-primaryBlue font-bold text-2xl w-[223px]'>Animation</h3>
                        <p className='text-primaryGrey text-lg font-medium py-6 md:py-4'>Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                        <p className='text-gradPink text-xl font-bold'>Get Started</p>
                    </div>
                </div>
            </div>
            {/* Card Design */}
            <div className='relative h-[365px] flex flex-col'>
                <div className='absolute z-10 top-0 left-8 w-[70px] h-[70px] bg-gradient-to-b from-gradOrange to-gradPink rounded-full flex justify-center items-center'>
                    <GiCube className='text-white' size={40} />
                </div>
                <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[320px] w-[388px] h-[320px] rounded-[20px] bg-white drop-shadow-lg mt-8'>
                    <div className='ml-8 mr-12 pt-[78px]'>
                        <h3 className='text-primaryBlue font-bold text-2xl w-[223px]'>Design</h3>
                        <p className='text-primaryGrey text-lg font-medium pt-6 pb-12 md:pb-8'>Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                        <p className='text-gradPink text-xl font-bold'>Get Started</p>
                    </div>
                </div>
            </div>
            {/* Card Photography */}
            <div className='relative h-[365px] flex flex-col'>
                <div className='absolute z-10 top-0 left-8 w-[70px] h-[70px] bg-gradient-to-b from-gradOrange to-gradPink rounded-full flex justify-center items-center'>
                    <BsCameraFill className='text-white' size={40} />
                </div>
                <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[320px] w-[388px] h-[320px] rounded-[20px] bg-white drop-shadow-lg mt-8'>
                    <div className='ml-8 mr-12 pt-[78px]'>
                        <h3 className='text-primaryBlue font-bold text-2xl w-[223px]'>Photography</h3>
                        <p className='text-primaryGrey text-lg font-medium py-6'>Explore critical fundamentals like lightning, composition, and focus to capture exceptional photos.</p>
                        <p className='text-gradPink text-xl font-bold'>Get Started</p>
                    </div>
                </div>
            </div>
            {/* Card Crypto */}
            <div className='relative h-[365px] flex flex-col'>
                <div className='absolute z-10 top-0 left-8 w-[70px] h-[70px] bg-gradient-to-b from-gradOrange to-gradPink rounded-full flex justify-center items-center'>
                    <MdDeviceHub className='text-white' size={40} />
                </div>
                <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[337px] w-[388px] h-[320px] rounded-[20px] bg-white drop-shadow-lg mt-8'>
                    <div className='ml-8 mr-12 pt-[78px]'>
                        <h3 className='text-primaryBlue font-bold text-2xl w-[223px]'>Crypto</h3>
                        <p className='text-primaryGrey text-lg font-medium py-6'>All you need to know to get started investing in crypto. Go
                            from beginner to advanced with this 54 hour course.</p>
                        <p className='text-gradPink text-xl font-bold'>Get Started</p>
                    </div>
                </div>
            </div>
            {/* Card Business */}
            <div className='relative h-[365px] flex flex-col'>
                <div className='absolute z-10 top-0 left-8 w-[70px] h-[70px] bg-gradient-to-b from-gradOrange to-gradPink rounded-full flex justify-center items-center'>
                    <MdBusinessCenter className='text-white' size={40} />
                </div>
                <div className='xl:w-[355px] xl:h-[337px] md:w-[414px] md:h-[337px] w-[388px] h-[320px] rounded-[20px] bg-white drop-shadow-lg mt-8'>
                    <div className='ml-8 mr-12 pt-[78px]'>
                        <h3 className='text-primaryBlue font-bold text-2xl w-[223px]'>Business</h3>
                        <p className='text-primaryGrey text-lg font-medium py-6'>A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
                        <p className='text-gradPink text-xl font-bold'>Get Started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards