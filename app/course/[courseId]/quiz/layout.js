import DashboardHeader from '@/app/(routes)/dashboard/_components/DashboardHeader'
import React from 'react'


function QuizLayout({children}) {
  return (
    <div>
      <DashboardHeader/>
        <div className='mx-10 md:mx-36 lg:px-44 mt-10'>
            {children}
        </div>
    </div>
  )
}

export default QuizLayout