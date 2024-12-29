import { generateFlashcardAIModel, generateQuizAiModel,generateNotesAIModel } from "@/configs/AiModel";
import { inngest } from "./client";
import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);
export const GenerateNotes = inngest.createFunction(
  { id: "generate-notes" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    const { course } = event.data;
    // Generate notes for each chapter with AI
    const notesResult = await step.run("Generate Chapter Notes", async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;
      Chapters.forEach(async (chapter) => {
        const PROMPT =
          "Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head, Body, title tag), The chapters :" +
          JSON.stringify(chapter);
        const result = await generateNotesAIModel.sendMessage(PROMPT);
        const aiResp = result.response.text();
        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId: index,
          courseId: course?.courseId,
          notes: aiResp,
        });
        index = index + 1;
      });
      return "Completed";
    });
    //Update Course Status 
    const updatedCourseResult = await step.run(
      "Update Course Status",
      async () => {
        const result = await db
          .update(STUDY_MATERIAL_TABLE)
          .set({
            status: "Ready",
          })
          .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId));
          return 'Success';
      }
    );
  }
);

export const GenerateFlashCards = inngest.createFunction(
  {id:'Generate Study Type Content'},
  {event:'studyType.content'},
  async({event,step})=>{
    const {studyType,prompt,courseId,recordId} = event.data;
    const AiResult = await step.run('Generate StudyTypeContent',async()=>{
      const result =  studyType =='Flashcard'? await generateFlashcardAIModel.sendMessage(prompt):await generateQuizAiModel.sendMessage(prompt);
      const AIResult = JSON.parse(result.response.text());
      return AIResult;
    });

    const DbResult = await step.run('Save Result to DB',async()=>{
      const result = await db.update(STUDY_TYPE_CONTENT_TABLE).set({
        content:AiResult,
        status:'Ready'
      }).where(eq(STUDY_TYPE_CONTENT_TABLE.id,recordId))
      return 'Data Inserted';
    });




  }

)
