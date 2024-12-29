import React, { useEffect, useState } from "react";
import MaterialCardItem from "./MaterialCardItem";
import axios from "axios";
import Link from "next/link";

function StudyMaterialSection({ courseId,course }) {
  const [studyTypeContent, setStudyTypeContent] = useState();
  useEffect(() => {
    GetStudyMaterial();
  }, []);

  const MaterialList = [
    {
      name: "Notes/Chapters",
      desc: "Read Notes to prepare it",
      icon: "/notes.png",
      path: "/notes",
      type: "notes",
    },
    {
      name: "Flashcard",
      desc: "Flashcard help to remember the concepts",
      icon: "/flashcard.png",
      path: "/flashcards",
      type: "flashcards",
    },
    {
      name: "Quiz",
      desc: "Great way to test your knowledge",
      icon: "/quiz.png",
      path: "/quiz",
      type: "quiz",
    },
    {
      name: "Question/Answers",
      desc: "Help to practice your learning",
      icon: "/qa.png",
      path: "/qa",
      type: "qa",
    },
  ];
  const GetStudyMaterial = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "ALL",
      });
      console.log(result.data);
      setStudyTypeContent(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[7rem] bottom-[27rem] relative p-7 max-w-5xl">
      <h2 className="font-bold text-5xl mt-[1rem] text-center ">
        Study Material
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[4rem]">
        {MaterialList.map((item, index) => (
          
            <MaterialCardItem
              item={item}
              key={index}
              studyTypeContent={studyTypeContent}
              course={course}
              refreshData={GetStudyMaterial}
            />
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
