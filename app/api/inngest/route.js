import { serve } from "inngest/next";
import { inngest } from "../../inngest/client";
import { GenerateNotes, helloWorld } from "@/app/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    GenerateNotes
    /* your functions will be passed here later! */
  ],
});
