import React from 'react'
import guide1 from '../assets/guide_1.png'
import guide2 from '../assets/guide_2.png'
import guide3 from '../assets/guide_3.png'
import Image from 'next/image'

const GuideCard = () => {
  return (
    <div className='py-8 px-32 bg-black'>
        <h1 className='text-4xl font-bold py-4'>Beginner's Guide</h1>
        <p className='text-gray-500 text-sm mb-16'>You can start learning about digital currency trading</p>

        <div className='flex gap-8'>
            <div>
                <Image src={guide1} alt='guide1'/>
                <h1 className='text-center text-white mt-2 font-semibold'>How to Trade Spot</h1>
            </div>
            <div>
                <Image src={guide2} alt='guide2'/>
                <h1 className='text-center text-white mt-2 font-semibold'>How to Deposit and Withdraw</h1>
            </div>
            <div>
                <Image src={guide3} alt='guide3'/>
                <h1 className='text-center text-white mt-2 font-semibold'>How to Secure Your Cryptocurrency</h1>
            </div>
        </div>
    </div>
  )
}

export default GuideCard