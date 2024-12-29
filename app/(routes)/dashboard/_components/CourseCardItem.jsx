import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CourseCardItem({ course }) {
  return (
    <div className="border bg-slate-950 p-4 cursor-pointer shadow-lg rounded-lg hover:scale-105 transition-all ease-in-out duration-300">
      <div>
        <div className="flex justify-between items-center">
          <Image src={"/knowledge.png"} alt="other" height={50} width={50} />
          <h2 className="text-[10px] p-1 px-2  rounded-full bg-blue-600 text-white">20 Dec 2024</h2>
        </div>
        <h2 className="mt-3 font-medium text-lg text-blue-600">
          {course?.courseLayout?.course_name}
        </h2>
        <p className="text-xs line-clamp mt-2">
          {course?.courseLayout?.summary}
        </p>
        
        <div className="mt-3">
          <Progress value={0} />
        </div>
        
        <div className="flex justify-end mt-3">
            {course?.status == 'Generating' ? <h2 className="text-[12px] p-1 px-2 text-white font-bold rounded-full bg-gray-400 flex items-center gap-2">
                <RefreshCcw className="h-5 w-5 animate-spin"/>
                Generating...</h2>
          :<Link href={'/course/' + course?.courseId}><Button className="text-white bg-primary">View</Button></Link>}
        </div>
      </div>
    </div>
  );
}

export default CourseCardItem;
