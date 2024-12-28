import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Dashboard() {
  return (
    <div className='min-h-screen'>
        <WelcomeBanner/>
        <CourseList/>
    </div>
  )
}

export default Dashboard