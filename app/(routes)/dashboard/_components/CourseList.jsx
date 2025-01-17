"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { CourseCountContext } from "@/app/_context/CourseCountContext";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {totalCourse,setTotalCourse} = useContext(CourseCountContext)
  const { user } = useUser();

  useEffect(() => {
    user && getCourseList();
  }, [user]);

  const getCourseList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      console.log(result.data);
      setCourseList(result.data.result);
      setLoading(false);
      setTotalCourse(result?.data?.result?.length)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 p-4" >
       <div className="flex justify-between items-center mb-[2rem]">
       <h2 className="font-bold text-2xl">Your Study Material</h2>
       <Button onClick={getCourseList} variant="outline" className="gap-3 border-primary text-primary"><RefreshCcw/>Refresh</Button>
       </div>
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        {loading == false ? courseList.map((course, index) => (
          <CourseCardItem course={course} key={index} />
        )):[1,2,3,4,5,6].map((item,index)=>(
          <div className="h-56 w-full bg-slate-600 rounded-lg animate-pulse" key={index}>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
