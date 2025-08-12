import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from "../components/core/HomePage/HighlightText"

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from  "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstuctorSection"
import Footer from "../components/common/Footer"
import ExploreMore  from '../components/core/HomePage/ExploreMore'
const Home = () => {
  return (
    <div>
        {/* section1 */}
         <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
         text-white  justify-between'>
        <Link to={"/signup"}>
            <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all  duration-200 hover:scale-95 w-fit'>  
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an instructor</p>
                    <FaArrowRight/>
                </div>
            </div>
        </Link>
        
        {/* Big heading */}
         <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your future with
            <HighlightText text={"Coding Skills"}/>
         </div>

         {/* subheading */}
        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our onlice coding courses, you can learn at your own pace,from anywhere in the world,and get access to wealth of resources including hands-on projects ,quizzes and personalized feedback from instructors.
        </div>
   
    {/* 2 side by side buttons  */}
    <div className='flex flex-row gap-7 mt-8'> 
    <CTAButton active={true} linkto={"/signup"}>
        Learn More
    </CTAButton>
    <CTAButton active={false} linkto={"/login"}>
        Learn More 
        Book a Demo
    </CTAButton>
    </div>

{/* video add */}
    <div className='mx-3 my-12 shadow-bllue-200'>
        <video
        muted
        loop
        autoPlay>
            <source src={Banner} type="video/mp4"/>
        </video>
    </div>


{/* code section1 */}
     <div>
        <CodeBlocks
            position={"lg:flex-row"}
            heading={
                <div className='text-4xl font-semibold'>
                   Unlock Your
                   <HighlightText text={"coding potential"} />
                   with our online courses
                </div>
            }
            subheading={
                "Our courses are designed and taught by industry expers who have years of experience in course l"
            }
            ctabtn1={
               {
                 btnText:"try it yourself",
               linkto:"/signup",
               active:true,
               }
            }
            ctabtn2={
               {
                 btnText:"learn more",
               linkto:"/login",
               active:false,
               }
            }

            codeblock={`<!DOCTYPE html>\n<html></html>`}
            codeColor={"text-yellow-25"}
        />
     </div>

     {/* code section2 */}
     <div>
        <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
                <div className='text-4xl font-semibold'>
                   Unlock Your
                   <HighlightText text={"coding potential"} />
                   with our online courses
                </div>
            }
            subheading={
                "Our courses are designed and taught by industry expers who have years of experience in course l"
            }
            ctabtn1={ 
               {
                 btnText:"Continue Lession",
               linkto:"/signup",
               active:true,
               }
            }
            ctabtn2={
               {
                 btnText:"learn more",
               linkto:"/login",
               active:false,
               }
            }

            codeblock={`<!DOCTYPE html>\n<html></html>`}
            codeColor={"text-yellow-25"}
        />
     </div>
           
           <ExploreMore/>
         </div>

        {/* section2 */}
        
        <div className='bg-pure-greys-5 text-richblack-700'>
               <div className='homepage_bg h-[1010px]'>
               <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 
               mx-auto'>
                 <div className='h-[150px]'></div>
                 <div className='flex flex-row gap-7 text-white'>
                   <CTAButton active={true} linkto={"/signup"}>
                   <div className='flex items-center gap-3'>
                    Explore Full Catalog
                    <FaArrowRight/>
                   </div>
                   </CTAButton>
                   {/* second button */}
                   <CTAButton active={false} linkto={"/signup"}>
                    <div>
                      Learn More  
                    </div>
                   </CTAButton>
                 </div>
               </div>

               </div>

             <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between 
             gap-7 mx-auto'>
             <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                <div className='text-4xl font-semibold w-[45%]'>
                    Get the skills you neew for access
                    <HighlightText text={"job thas is in demand"}/>
                </div> 

                <div className='flex flex-col gap-10 w-[40%] items-start'>
               <div className='text-[16px]'>
                The moder study notion is the dictetes its own terms .Today ,to be a competitive
                specialist requires more than professional skills.
               </div>
               <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn moree
                </div>
               </CTAButton>
             </div>
             </div>

            

             <TimelineSection/>
             <LearningLanguageSection/>
             </div>  

        </div>


        {/* section3 */}
         <div className='w-11/12 mx-auto max-w-maxContent  flex-col items-center justify-between gap-8
        first-letter bg-richblack-900 text-white'>
         <InstructorSection/>
         <h2 className='text-center text-4xl font-semibold mt-10'>review from other Learners</h2>
         {/* Review Slider here */}
         </div>

        {/* section4 */}
        <Footer/>

    </div>
  )
}

export default Home