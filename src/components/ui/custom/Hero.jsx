import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";
import Corousel from './Corousel';
import FooterMain from './FooterMain';


function Hero() { 
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'> <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>  Personalized itineraries at Your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget </p>
      <Link to={'/create-trip'} >
        {/* <Button>Get Started ,Its Free</Button> */}
       <div className='flex items-center gap-5'>
        <p className='text-lg text-red-500 shadow-md rounded-lg'>Get Started Here</p>
          <FaArrowRight  className='w-10 h-10  hover:shadow-md rounded-3xl'/>
          <button id='btn'>
            <a href="#"><span>Explore</span></a>
          </button>
       </div>
      </Link>
     <Corousel/>

     {/* footer */}
    
     <FooterMain/>
    
    
    </div>
  )
}

export default Hero