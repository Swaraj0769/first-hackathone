import React, { useEffect, useRef } from 'react'
// import {sliderData}  from '../components/Slider';
import VideoCanvas from '../components/VideoCanvas';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Carousel from '../components/Carousel';
import Travel from '../components/Travel';
import BMap from '../components/BMap';
import CursorFollower from '../components/CursorFollower';
import Footer from '../components/Footer';

// src/sliderData.js
const sliderData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Gulmarg_in_Winter.jpg",
    name: "Gulmarg, Kashmir"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    name: "Taj Mahal, Agra"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Om_Beach_Gokarna.jpg",
    name: "Gokarna, Karnataka"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Dal_Lake_Srinagar.jpg",
    name: "Srinagar, Kashmir"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Radhanagar_beach_Havelock_Island.jpg",
    name: "Havelock, Andaman"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Backwaters_in_Alleppey.jpg",
    name: "Alleppey, Kerala"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Baga_Beach_Goa.jpg",
    name: "Goa"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kavaratti_Lakshadweep.jpg",
    name: "Lakshadweep"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ooty_Lake_-_panoramio.jpg",
    name: "Ooty, Tamil Nadu"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Pondicherry_Rock_Beach.jpg",
    name: "Pondicherry, Tamil Nadu"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Manali_view.jpg",
    name: "Manali, Himachal Pradesh"
  }
];




const Home = () => {

  // const navigate = useNavigate();
  // const cardRefs = useRef([]);

  // useEffect(() => {
  //   gsap.from(cardRefs.current, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //   });

  // }, []);

  return (
    <div className='w-full relative min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] text-gray-800' >
      <CursorFollower />
      <BMap />
      <Travel />
      {/* <div className="App w-[100%] h-screen overflow-hidden bg-zinc-500 justify-center flex items-center">
      <Carousel images={sliderData} autoPlay={true} interval={2000} />
      </div> */}
      <div>
      <VideoCanvas src="./src/assets/travelling.mp4" />
      
    </div>
      <Footer />
      
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

export default Home;