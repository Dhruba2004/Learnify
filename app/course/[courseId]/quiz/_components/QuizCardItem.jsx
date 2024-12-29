"use client"
import React, { useState } from 'react'

function QuizCardItem({quiz,userSelectedOption}) {
    const [selectedOption,setSelectedOption] = useState()
  return (
    <div className='mt-10 p-5'>
       <h2 className='font-medium text-3xl '>{quiz?.question}</h2>
       <div className='grid grid-cols-2 gap-5 mt-5'>
        {quiz?.options?.map((option,index)=>(
            <h2 onClick={()=>{setSelectedOption(option);userSelectedOption(option)}} className={`w-full border rounded-full p-3 px-5 text-center cursor-pointer hover:bg-gray-800 ${selectedOption ==option && 'bg-primary text-white hover:bg-primary'}`} key={index}>{option}</h2>
        ))}
       </div>
    </div>
  )
}

export default QuizCardItem