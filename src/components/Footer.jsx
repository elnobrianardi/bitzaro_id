import React from 'react'

const Footer = () => {
  return (
    <div className='flex max-w-[1200px] mx-auto justify-between items-center px-32 py-16 text-[#a6a6a6] text-sm'>
      <div>
        <p>Copyright © 2025 Bitzaro.</p>
      </div>
      <div>
        <p>About Us</p>
        <p>Fee Structure</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>API Doc</p>
        <p>User Agreement</p>
        <p>Disclaimer</p>
      </div>
      <div className='text-right'>
        <p>Contact Us</p>
        <p>Apply for Listing</p>
      </div>
    </div>
  )
}

export default Footer
