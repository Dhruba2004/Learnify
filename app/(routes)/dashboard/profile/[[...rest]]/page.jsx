import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='h-screen flex justify-center items-center mr-[8rem]'>
    <UserProfile/>
    </div>
  )
}

export default Settings