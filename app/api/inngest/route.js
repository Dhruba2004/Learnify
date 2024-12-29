import { serve } from "inngest/next";
import { inngest } from "../../inngest/client";
import { GenerateFlashCards, GenerateNotes, helloWorld } from "@/app/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    GenerateNotes,
    GenerateFlashCards
    /* your functions will be passed here later! */
  ],
});
