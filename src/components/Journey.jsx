import React from 'react'
import service1 from '../assets/service_1.png'
import service2 from '../assets/service_2.png'
import service3 from '../assets/service_3.png'
import service4 from '../assets/service_4.png'
import Image from 'next/image'

const Journey = () => {
  return (
    <div className='py-8 px-32 bg-black gap-8'>
        <h1 className='text-4xl font-bold py-4'>Start your digital currency journey</h1>
        <div className='flex justify-between'>
            <div className='max-w-64'>
                <Image src={service1} alt='service1'/>
                <h1>0 Handling Fees</h1>
                <p className='text-[#a6a6a6]'>Use a variety of payment methods to buy/sell digital currencies instantly and experience 0 handling fees.</p>
            </div>
            <div className='max-w-64'>
                <Image src={service2} alt='service2'/>
                <h1>Optimal transaction fees</h1>
                <p className='text-[#a6a6a6]'>Trade with preferential & tiered transaction fees, competitive VIP discounts, and enjoy the best quality of service with us.</p>
            </div>
            <div className='max-w-64'>
                <Image src={service3} alt='service3'/>
                <h1>Reliable security</h1>
                <p className='text-[#a6a6a6]'>Our sophisticated security measures along with our institutional asset custody integrations protects your digital assets from all risks imaginable.</p>
            </div>
            <div className='max-w-64'>
                <Image src={service4} alt='service4'/>
                <h1>24*7 Support</h1>
                <p className='text-[#a6a6a6]'>Our 24*7 customer service team will resolve all problems or questions you may have when using our platform in real time.</p>
            </div>
        </div>
    </div>
  )
}

export default Journey