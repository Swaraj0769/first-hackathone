import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 max-h-70 text-white py-4 text-center'>
      <div className='container mx-auto px-4'>
        <h2 className='text-lg font-semibold mb-2'>Explore India with Us</h2>
        <p className='text-sm mb-4'>Your journey to India starts here.  Discover the beauty, culture, and history of Italy with our expert-guided tours and custom packages.</p>
        <div>
          <div>
            <img src="" alt="" />
            
          </div>
          <div></div>
          <div></div>
        </div>
        
        <div className='flex justify-center space-x-4'> 
          <a href='#' className='text-gray-500 hover:text-white transition-colors'>Book a Tour</a>
          <a href='#' className='text-gray-500 hover:text-white transition-colors'>Contact Us</a>
        </div>
      </div>

      <p className='text-sm'>© 2023 Your Company Name. All rights reserved.</p>
    </div>
  )
}

export default Footer