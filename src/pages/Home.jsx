import React, { useEffect, useRef } from 'react'
import {sliderData}  from '../components/Slider';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Carousel from '../components/Carousel';
import Travel from '../components/Travel';
import BMap from '../components/BMap';
import CursorFollower from '../components/CursorFollower';
import Footer from '../components/Footer';

const services = [
  {
    id: "1",
    title: "Custom Tour Packages",
    description: "Tailored itineraries to match your preferences and interests.",
  },
  {
    id: "2",
    title: "Hotel & Accommodation Booking",
    description: "Curated stays from luxury hotels to countryside villas.",
  },
  {
    id: "3",
    title: "Transportation Services",
    description: "Private transfers, car rentals, and more across Italy.",
  },
  {
    id: "4",
    title: "Guided Tours",
    description: "Expert-led tours of Italy's most iconic destinations.",
  },
  {
    id: "5",
    title: "Cultural Experiences",
    description: "Wine tastings, cooking classes, and more authentic experiences.",
  },
];


const Home = () => {

  const {images, name} = sliderData;

  const navigate = useNavigate();
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.1,
      stagger: 0.2,
      ease: "power3.out",
    });

  }, []);

  return (
    <div className='w-full relative min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] text-gray-800' >
      <CursorFollower />
      <div className="App w-[100%] h-screen overflow-hidden bg-zinc-500 justify-center flex items-center">
      <Carousel images={sliderData} autoPlay={true} interval={2000} />
      </div>
      <Travel />
      <BMap />
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