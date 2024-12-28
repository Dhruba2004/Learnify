import { inngest } from "@/app/inngest/client";
import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseId, courseType, topic, difficultyLevel, createdBy,status } = await req.json();

    // Validate required fields
    if (!courseId || !courseType || !topic || !difficultyLevel || !createdBy) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const PROMPT =
      "Generate a study material for " +
      topic +
      " for " +
      courseType +
      " and difficulty level will be " +
      difficultyLevel +
      " with the summary of course , List of chapters along with summary and Emoji icon for each chapter , Topic list in each chapter in JSON format";

    const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult = JSON.parse(aiResp.response.text());
    
    const dbResult = await db
      .insert(STUDY_MATERIAL_TABLE)
      .values({
        courseId,
        courseType,
        topic,
        difficultyLevel,
        createdBy,
        status,
        courseLayout: aiResult,
      })
      .returning({resp:STUDY_MATERIAL_TABLE});
    // Trigger the inngest function to generate chapter notes
    const result = await inngest.send({
      name:"notes.generate",
      data:{
        course:dbResult[0].resp

      }

    }) 
    console.log(result)

    return NextResponse.json({ result: dbResult[0] });
    
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
