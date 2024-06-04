import React from "react";

function JobsAI() {
  return (
    <>
      <div className="mt-16 flex flex-col items-center text-slate-700">
        <h1 className="text-4xl font-semibold mb-8">
          Provide a Job Description
        </h1>
        <div className="flex gap-4">
          <button className="bg-slate-200 p-4">Custom</button>
          <button className="bg-slate-200 p-4">Web Developer</button>
        </div>

        <textarea
          className="w-[90%] md:w-full max-w-[700px] border border-2 border slate-200 rounded-md p-4 resize-none"
          name=""
          id=""
          rows={12}
          placeholder="Select a job role to view an example or paste your own description here"
        />
      </div>
    </>
  );
}

export default JobsAI;
