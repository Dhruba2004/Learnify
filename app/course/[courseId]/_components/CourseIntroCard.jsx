import { Progress } from '@/app/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({course}) {

  return (
    <div className='p-10 flex flex-col gap-5 shadow-md rounded-lg bg-slate-950'>
        <Image src={'/knowledge.png'} alt='other' height={80} width={80}/>
        <div className='flex gap-5 flex-col'>
            <h2 className='font-bold text-2xl text-primary'>{course?.courseLayout?.course_name}</h2>
            <p className="line-clamp-2 text-gray-500">{course?.courseLayout?.summary}</p>
            <Progress value = {0} className="mt-3"/>
            <h2 className='mt-3 text-lg text-primary'>Total Chapters : {course?.courseLayout?.chapters?.length}</h2>
        </div>
    </div>
  )
}

export default CourseIntroCard