"use client";
import DashboardHeader from "@/app/(routes)/dashboard/_components/DashboardHeader";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseIntroCard from "./_components/CourseIntroCard";
import StudyMaterialSection from "./_components/StudyMaterialSection";
import ChapterList from "./_components/ChapterList";

function CoursePage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    GetCourse();
  }, [courseId]);

  const GetCourse = async () => {
    const result = await axios.get("/api/courses?courseId=" + courseId);
    console.log(result.data);
    setCourse(result.data.result);
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader />
      {/* Course Intro */}
      <div className="mx-10 md:mx-36 lg:px-60 mt-10 min-h-screen flex flex-col">
        <CourseIntroCard course={course} />
      </div>
      <div className="container flex items-center justify-center">
        <StudyMaterialSection />
      </div>
      <div className="lg:px-60 nd:mx-36 mx-10 relative bottom-[23rem] ">
        <ChapterList course={course} />
      </div>

      {/* Chapter List */}
    </div>
  );
}

export default CoursePage;
