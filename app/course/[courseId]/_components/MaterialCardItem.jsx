"use client"
import { Button } from "@/app/components/ui/button";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false);
  const {courseId} = useParams();
  let chapters = "";
  course?.courseLayout?.chapters.forEach((chapter) => {
    chapters = chapter.chapter_name + "," + chapters;
  });

  const generateContent = async () => {
    toast("Generating Your Content");
    setLoading(true);
    try {
      const result = await axios.post("/api/study-type-content", {
        courseId: courseId,
        type: item?.name,
        chapters: chapters,
      });
      setLoading(false);
      console.log(result);
      refreshData(true);
      toast.success("Your Content is ready to view");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Link href={"/course/" + course?.courseId + item.path}>
      <div
        className={`flex items-center flex-col text-center gap-3 h-full bg-slate-950 border p-5 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ${
          studyTypeContent?.[item.type]?.length == 0 && "grayscale"
        }`}
      >
        {studyTypeContent?.[item.type]?.length == 0 ? (
          <h2 className="p-1 px-2 bg-green-500 text-white font-semibold rounded-full text-[10px]">
            Generate
          </h2>
        ) : (
          <h2 className="p-1 px-2 bg-green-500 text-white font-semibold rounded-full text-[10px]">
            View
          </h2>
        )}
        <Image src={item?.icon} alt={item.name} height={50} width={50} />
        <h2 className="font-medium text-purple-600">{item.name}</h2>
        <p className="text-gray-400 text-sm text-center">{item.desc}</p>
        {studyTypeContent?.[item.type]?.length == 0 ? (
          <Button
            variant="outline"
            className="text-white"
            onClick={() => generateContent()}
          >
            {loading && <RefreshCcw className="animate-spin" />}
            Generate
          </Button>
        ) : (
          <Button variant="outline" className="text-white">
            View
          </Button>
        )}
      </div>
    </Link>
  );
}

export default MaterialCardItem;
