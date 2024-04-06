import React from 'react'
import {logo ,shopCart , man} from '../assets/index';
import { Link } from 'react-router-dom';

const  Header  = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex  items-center justify-between'>
          <Link to="/">
          <div>
                <img className="w-20"  src={logo} alt="" />
          </div>
          </Link>
            <div className='flex items-center gap-8'>
              <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-green-800 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-green-800 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-green-800 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-green-800 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-green-800 decoration-[1px] cursor-pointer duration-300'>Blog</li>
              </ul>

              <div className='relative'>
                <img className='w-9' src={shopCart} alt="shop Cart" />
                <span  className='absolute w-6 top-1 left-2 text-sm flex items-center justify-center font-semibold  font-titleFont'>0</span>
              </div>

              <img className="w-9 h-9 " src={man} alt="Profile Icon" />
            </div>
        </div>
    </div>
  )
}

export default Header;