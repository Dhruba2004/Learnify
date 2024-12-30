import { serve } from "inngest/next";
import { inngest } from "../../inngest/client";
import { GenerateFlashCards, GenerateNotes, helloWorld } from "@/app/inngest/functions";
export const runtime = 'edge'

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  streaming:'allow',
  functions: [
    helloWorld,
    GenerateNotes,
    GenerateFlashCards
    /* your functions will be passed here later! */
  ],
});
