"use client";

import { Button } from "@/app/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ViewNotes() {
  const { courseId } = useParams();

  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
      const result = await axios.post("/api/study-type", {
        courseId,
        studyType: "notes",
      });
  
      console.log("API Response:", result?.data);
  
      // Parse the notes field from each object
      const formattedNotes = result?.data?.map((note) => {
        try {
          const parsedNotes = JSON.parse(note?.notes || "{}"); // Safely parse JSON
          return parsedNotes?.content; // Extract the content property
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return null; // Return null if parsing fails
        }
      }).filter(content => content !== null) || [];
  
      console.log("Formatted Notes:", formattedNotes);
      setNotes(formattedNotes);
  };
  

  const handleNext = () => {
    if (stepCount < notes.length - 1) {
      setStepCount((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (stepCount > 0) {
      setStepCount((prev) => prev - 1);
    }
  };

  return (
    notes.length > 0 && (
      <div>
        <div className="flex gap-5 items-center">
          {stepCount > 0 && (
            <Button onClick={handlePrevious} variant="outline" size="sm">
              Previous
            </Button>
          )}
          {notes?.map((_, index) => (
            <div
              key={index}
              className={`w-full h-2 rounded-full ${
                index < stepCount ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
          ))}
          {stepCount < notes.length - 1 && (
            <Button onClick={handleNext} variant="outline" size="sm">
              Next
            </Button>
          )}

        </div>

        <div className="mt-10">
          <div className="prose prose-lg text-white max-w-none border p-10 rounded-lg shadow-lg" dangerouslySetInnerHTML={{ __html: notes[stepCount] }} />
        </div>
      </div>
    )
  );
}

export default ViewNotes;
