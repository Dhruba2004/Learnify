"use client"
import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";
import { CourseCountContext } from "@/app/_context/CourseCountContext";

export default function DashboardLayout({ children }) {
  const [totalCourse,setTotalCourse] = useState(0)
  return (
    <CourseCountContext.Provider value={{totalCourse,setTotalCourse}}>
      <div>
        <div className="md:w-64 md:block hidden h-screen fixed">
          <Sidebar />
        </div>
        <div className="md:ml-64">
          <DashboardHeader />
          <div className="p-5">{children}</div>
        </div>
      </div>
    </CourseCountContext.Provider>
  );
}
