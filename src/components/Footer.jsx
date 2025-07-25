import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 max-h-70 text-white py-4 text-center'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center px-30 sm:px-50 lg:px-70 xl:px-90  space-x-8 mb-10'>
          <div>
            <span className='text-3xl'>🚴</span>
            <h2>Cycling</h2>
          </div>
          <div>
            <span className='text-3xl'>🛶</span>
            <h2>Boating</h2>
          </div>
          <div>
            <span className='text-3xl'>🧗‍♂️</span>
            <h2>Climbing</h2>
          </div>
        </div>
        <h2 className='text-lg font-semibold mb-2'>Explore India with Us</h2>
        <p className='text-sm mb-4'>Your journey to India starts here.  Discover the beauty, culture, and history of Italy with our expert-guided tours and custom packages.</p>
        
        
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