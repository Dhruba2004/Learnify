import React from "react";

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters;
  return (
    <div className="">
      <h2 className="font-medium text-2xl text-primary">Chapters</h2>
      <div className="grid md:grid-cols-1 gap-5 mt-4">
        {CHAPTERS?.map((chapter, index) => (
          <div key={index} className="flex items-center gap-3 border bg-slate-950 p-5 rounded-xl hover:scale-105 transition-all ease-in-out cursor-pointer duration-500">
            <h2>{chapter?.emoji}</h2>
            <div>
              <h2>{chapter?.chapter_name}</h2>
              <p className="text-gray-500">{chapter?.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
