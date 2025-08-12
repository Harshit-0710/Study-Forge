import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "./Button"

import { FaArrowRight } from 'react-icons/fa'


const InstuctorSection = () => {
  return (
    <div className='mt-16'>
        <div className='flex flex-row gap-20 item-center'>
          
          <div className='w-[50%]'>
           <img
            src={Instructor}
            alt='kitab wali aunty'
            className='shadow-white'
           />
          </div>
          {/* right wala dabba */}
          <div className='w-[50%] flex flex-col gap-10'>
             <div className='text-4xl font-semibold w-[50%]'>
                Become an 
                <HighlightText text={"Instructor"}/>
             </div>

             <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
             Instructors form around the world teach millions of students on Mynotion we 
             provide the tools and skills to teach what you love. 
             </p>

             <div className='w-fit'>
             <CTAButton active={true} linkto={"/signup"}>
                <div className='flex flex-row gap-2 items-center'>
                Start Learning today
                <FaArrowRight/>
                </div>
             </CTAButton>
             </div>
             
          </div>
        </div>
    </div>
  )
}

export default InstuctorSection