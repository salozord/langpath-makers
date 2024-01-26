"use client";

import * as React from "react";
import QuestionCard from "../components/conversation/question";
import { useCompletion } from "ai/react";
import AudioRecorder from "../components/conversation/audioRecorder";

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit, error } =
    useCompletion();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div>
        <QuestionCard question="Why does the project have this P&L?" />
      </div>
      <div className="container mx-auto p-4 dark:bg-gray-900 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">
          Audio Recorder
        </h1>
        <AudioRecorder />
      </div>
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
          {error.message}
        </div>
      )}
      {completion}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
