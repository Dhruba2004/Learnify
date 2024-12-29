"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

function Quiz() {
    const { courseId } = useParams();
    useEffect(()=>{
        GetQuizData()
    })
  const GetQuizData = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "Quiz",
    });
    console.log(result?.data)
  };
  
  return <div></div>;
}

export default Quiz;
