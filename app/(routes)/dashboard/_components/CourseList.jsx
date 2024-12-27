"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getCourseList();
  }, [user]);

  const getCourseList = async () => {
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      console.log(result.data);
      setCourseList(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl">Your Study Material</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        {courseList.map((course, index) => (
          <CourseCardItem course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
