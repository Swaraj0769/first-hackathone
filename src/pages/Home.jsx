import React from 'react'
import {sliderData}  from '../components/Slider';
import Carousel from '../components/Carousel';
import Travel from '../components/Travel';
import BMap from '../components/BMap';
import CustomMap from '../components/CustomMap';

const Home = () => {

  const {images, name} = sliderData;

  return (
    <div className='w-full h-screen bg-zinc-500 ' >
      <div className="App w-[100%] h-screen overflow-hidden bg-zinc-500 justify-center flex items-center">
      <Carousel images={sliderData} autoPlay={true} interval={2000} />
      </div>
      <Travel />
      <BMap />
      {/* <CustomMap /> */}
    </div>
  )
}
// return (
//   <div>{location.map((item, index) => (
//     <div key={index} className='w-full h-full object-cover overflow-hidden'>
//       <img src={item.image} alt="" />
//       <div className='w-25 h-10 leading-none  border-2  border-white rounded-lg absolute top-170 text-center left-180 text-white '>
//         {item.name}
//       </div>
//     </div>
//   ))}</div>
// )

export default Home