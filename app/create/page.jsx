"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/app/components/ui/button";
import TopicInput from "./_components/TopicInput";
import axios from "axios";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Dashboard from "../(routes)/dashboard/page";
import DashboardHeader from "../(routes)/dashboard/_components/DashboardHeader";

function Create() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [formData, setFormData] = useState([]);

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
    console.log(formData);
  };

  const generateCourseOutline = async () => {
    setLoading(true);
    const courseId = uuid4();
    try {
      const result = await axios.post("/api/generate-course-outline", {
        courseId: courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress.emailAddress,
      });
      toast.success("Course Outline Generated Successfully");
      setLoading(false);
      router.replace("/dashboard");
      console.log(result);
    } catch (error) {
      toast.error("Error Occured while generating course outline");
      console.log(error);
    }
  };
  const [step, setStep] = useState(0);
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
        <h2 className="font-bold text-primary text-4xl">
          Start Building Your Personal Study Material
        </h2>
        <p className="text-gray-500 text-lg">
          Fill all details in order to generate study material for your next
          project{" "}
        </p>

        <div className="mt-10">
          {step == 0 ? (
            <SelectOption
              selectedStudyType={(value) =>
                handleUserInput("courseType", value)
              }
            />
          ) : (
            <TopicInput
              setTopic={(value) => {
                handleUserInput("topic", value);
              }}
              setDiificultyLevel={(value) => {
                handleUserInput("difficultyLevel", value);
              }}
            />
          )}
        </div>

        <div className="flex justify-between w-full mt-32">
          {step != 0 ? (
            <Button onClick={() => setStep(step - 1)} variant="outline">
              Previous
            </Button>
          ) : (
            <Button variant="outline">Previous</Button>
          )}
          {step == 0 ? (
            <Button className="text-white" onClick={() => setStep(step + 1)}>
              Next
            </Button>
          ) : (
            <Button onClick={generateCourseOutline} className="text-white">
              {loading && <Loader2 className="animate-spin" />}
              Generate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
