import React from "react";
import MaterialCardItem from "./MaterialCardItem";

function StudyMaterialSection() {
  const MaterialList = [
    {
      name: "Notes/Chapters",
      desc: "Read Notes to prepare it",
      icon: "/notes.png",
      path: "/notes",
    },
    {
      name: "Flashcard",
      desc: "Flashcard help to remember the concepts",
      icon: "/flashcard.png",
      path: "/flashcards",
    },
    {
      name: "Quiz",
      desc: "Great way to test your knowledge",
      icon: "/quiz.png",
      path: "/quiz",
    },
    {
      name: "Question/Answers",
      desc: "Help to practice your learning",
      icon: "/qa.png",
      path: "/qa",
    },
  ];
  return (
    <div className="mt-[7rem] bottom-[27rem] relative p-7 max-w-5xl">
      <h2 className="font-bold text-5xl mt-[1rem] text-center ">Study Material</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[4rem]">
        {MaterialList.map((item, index) => (
          <MaterialCardItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
