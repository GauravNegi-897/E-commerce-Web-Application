import React from 'react'
import {ImGithub} from "react-icons/im";
import { TbBrandPaypal } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaHome , FaUser} from "react-icons/fa";
import { logo ,payment , visa , paypal} from '../assets'


const Footer = () => {
  return (
    <div  className='bg-black text-[#949494] py-20 font-titleFont'>
        
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        
        <div className='flex flex-col gap-4'>
            <img className="w-12"  src={logo} alt="logo" />
            <div className="text-white text-sm tracking-wide">© Shopping.com</div>
            <span className='flex gap-4'>
                <img className="w-9"  src={payment} alt="Rupay" />
                <img className="w-9" src={visa} alt="visa" />
                <img className="w-9"  src={paypal} alt="paypal" />
            </span>

            <div className='flex gap-5 text-lg text-gray-400'>
                <ImGithub  className="hover:text-white duration-300 cursor-pointer"/>
                <FaYoutube  className="hover:text-white duration-300 cursor-pointer"/>
                <FaFacebookF  className="hover:text-white duration-300 cursor-pointer"/>
                <FaInstagram  className="hover:text-white duration-300 cursor-pointer"/>
                <FaTwitter  className="hover:text-white duration-300 cursor-pointer"/>

            </div>
        </div>
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Contact Us</h2>
        <div className="text-base flex flex-col gap-2">
            <p>New Delhi, India</p>
            <p>Mobile: 8505924657</p>
            <p>Phone: 9843840234</p>
            <p>E-mail: Shoping@gmail.com</p>
        </div>
        </div>

        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>

            <div className='flex flex-col gap-2 text-base '>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <FaUser/>
                </span>
                my account
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <TbBrandPaypal/>
                </span>
                CheckOut
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <FaHome/>
                </span>
                Order tracking
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <CiLocationOn/>
                </span>
                Help & Support
            </p>
            </div>
        </div>

            <div className='flex flex-col justify-center'>
                <input  className="bg-transparent border px-4  py-2 text-sm" placeholder='email' type="text" />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer