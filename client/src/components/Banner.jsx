import React, { useState } from 'react'
import {HiArrowRight , HiArrowLeft} from "react-icons/hi";

const Banner = () => {

  const [currentSlide , setCurrentSlide] = useState(0);

  const data = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31032024-MainBannerDailyChanging-Z1-P4-Levis-USPA-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31032024-MainBannerDailyChanging-Z1-P3-Crocs-Skechers-UPTO30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-31032024-MainBannerDailyChanging-Z1-p6-TIG-Ketch-flat65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-31032024-MainBannerDailyChanging-Z1-p7-Crocodile-Kazo-min60.jpg"
  ];

  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0?3 : (prev) => prev-1);
  }

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === 3?0 : (prev) => prev+1);
  }

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen-h-[650px] relative' >
        <div style={{transform:`translateX(-${currentSlide*100}vw)`}}
        className='w-[400vw] h-full flex transition-transform duration-1000'>
              <img className="w-screen h-full object-cover" src={data[0]} alt="Banner Image" loading='priority'/>
              <img className="w-screen h-full object-cover" src={data[1]} alt="Banner Image" loading='priority'/>
              <img className="w-screen h-full object-cover" src={data[2]} alt="Banner Image" loading='priority'/>
              <img className="w-screen h-full object-cover" src={data[3]} alt="Banner Image" loading='priority'/>
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-20'>
          <div onClick={prevSlide}  className='w-14 h-10  border-[1px] border-gray-700 flex items-center justify-center hover:center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft/>
          </div>
          <div onClick={nextSlide} className='w-14 h-10  border-[1px] border-gray-700 flex items-center justify-center hover:center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner