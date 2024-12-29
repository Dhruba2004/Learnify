import { Button } from "@/app/components/ui/button";
import React from "react";

const StepProgress = ({ stepCount, setStepCount, data }) => {
  return (
    data.length > 0 && (
      <div className="flex gap-5 items-center">
        {stepCount > 0 && (
          <Button onClick={()=>setStepCount(stepCount-1)} variant="outline" size="sm">
            Previous
          </Button>
        )}
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-full h-2 rounded-full ${
              index < stepCount ? "bg-primary" : "bg-gray-200"
            }`}
          ></div>
        ))}
        {stepCount < data.length - 1 && (
          <Button onClick={()=>setStepCount(stepCount+1)} variant="outline" size="sm">
            Next
          </Button>
        )}
      </div>
    )
  );
};

export default StepProgress;
