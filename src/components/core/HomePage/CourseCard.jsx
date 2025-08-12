import React from 'react'

const CourseCard = ({cardData,currentCard,setCurrentCard}) => {
  return (
    <div className='flex flex-row items-center justify-center '>
    <div className='flex flex-col  bg-richblack-800  px-10 py-10'>
      <div className='text-xl font-bold text-richblack-200 '>
        {cardData.heading}
      </div> 

      <div className='mt-5 text-richblack-300 '>
      {cardData.description}
      </div>
       
      <div className='flex flex-row items-center justify-between mt-[20%] text-lg text-richblack-400'>
      <div>
      {cardData.level}
      </div>
       
       <div>
       
         {cardData.lessionNumber}
         Lessons
       </div>
       
        </div>
     
     
     
    </div>
    </div>
  )
}

export default CourseCard