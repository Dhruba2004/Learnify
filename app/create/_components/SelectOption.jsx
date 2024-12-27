import Image from "next/image";
import React, { useState } from "react";

function SelectOption({selectedStudyType}) {
  const Options = [
    {
      name: "Exam",
      icon: "/exam_1.png",
    },
    {
      name: "Job Interview",
      icon: "/job.png",
    },
    {
      name: "Practice",
      icon: "/practice.png",
    },
    {
      name: "Coding Prep",
      icon: "/code.png",
    },
    {
      name: "Other",
      icon: "/knowledge.png",
    },
  ];
  const [selectedoption, setSelectedOption] = useState()
  return (
    <div>
      <h2 className="text-xl text-center mb-2">
        For Which you want to create your personal study material?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {Options.map((option, index) => (
          <div key={index} className={`flex flex-col items-center justify-center border p-4 cursor-pointer rounded-xl hover:border-primary ${option?.name==selectedoption && 'border-primary'}`} onClick={()=>{setSelectedOption(option?.name);selectedStudyType(option.name)}}>
            <Image width={50}  height={50} src={option.icon} alt={option.name} />
            <h2 className="text-sm mt-2 text-white">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
