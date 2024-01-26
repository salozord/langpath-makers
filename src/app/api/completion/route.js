import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

// Prompt for giving feedback
const feedbackPrompt = `This is a feedback prompt. It is used to give feedback to the user`

export async function POST(req) {
    
    // Get the prompt from the request body
    const json = await req.json();
    const { prompt } = json;

    // Add the feedback prompt to the prompt
    console.log(prompt)
    // prompt = `${feedbackPrompt}\n\n${prompt}\n\n`;
   
    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 2000,
      stream: true,
      prompt,
    });
   
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
   
    // Respond with the stream
    return new StreamingTextResponse(stream);
  }