import React, { useState } from "react";
import OpenAI from "openai";

const softwareEngineerJobDescription = `Job Title: Software Engineer

Role Summary: We are looking for a Software Engineer to join our diverse and dedicated team. This position is an excellent opportunity for those seeking to grow their skills and experience in software development while working on projects with significant impact.

Responsibilities:
- Develop and implement new software solutions.
- Collaborate with teams to understand objectives, design features, and meet specific requirements.
- Improve and maintain existing software to ensure strong functionality and optimization.
- Recommend changes to existing software applications, as necessary, to ensure excellent functionality.
- Write efficient, secure, well-documented, and clean JavaScript code.
- Participate in all phases of the development life cycle.

Requirements:
- Degree in Computer Science or related field.
- 0-3 years of experience in software development.
- Demonstrated problem-solving abilities and attention to detail.
- Proficiency with at least one programming language.
- Familiarity with various operating systems and platforms.
- Good understanding of software development principles.
- Excellent communication and teamwork skills.
- Demonstrated ability to manage and prioritize tasks independently.`;

function JobsAI() {
  const [jobDescription, setJobDescription] = useState("");
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobDescription);
  };

  const processTextToChatGPT = async (text) => {};

  return (
    <>
      <div className="mt-16 flex flex-col items-center text-slate-700">
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Provide a Job Description
        </h1>
        <form
          className="flex flex-col items-center w-[90%] md:w-full max-w-[700px]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 mb-8">
            {/* Custom Description */}
            <label
              className={`p-4 rounded cursor-pointer ${
                jobDescription === ""
                  ? "bg-green-100 border border-1 border-green-600 text-green-700"
                  : "bg-slate-200"
              }`}
              htmlFor="custom"
            >
              <input
                className="sr-only peer"
                onChange={handleChange}
                type="radio"
                name="jobDescription"
                id="custom"
                value={""}
                checked={jobDescription === ""}
              />
              <span>Custom</span>
            </label>
            {/* Software Engineer Description */}
            <label
              className={`p-4 rounded cursor-pointer ${
                jobDescription === softwareEngineerJobDescription
                  ? "bg-green-100 border border-1 border-green-600 text-green-700"
                  : "bg-slate-200"
              }`}
              htmlFor="softwareEngineer"
            >
              <input
                className="sr-only peer"
                onChange={handleChange}
                type="radio"
                name="jobDescription"
                id="softwareEngineer"
                value={softwareEngineerJobDescription}
                checked={jobDescription === softwareEngineerJobDescription}
              />
              <span>Software Engineer</span>
            </label>
          </div>

          <textarea
            className="w-full max-w-[700px] border border-2 border slate-200 rounded-md p-4 resize-none mb-12"
            name=""
            id=""
            rows={12}
            placeholder="Select a job role to view an example or paste your own description here"
            value={jobDescription}
            onChange={handleChange}
            required={true}
          />

          {typing ? (
            <></>
          ) : (
            <button className="bg-slate-200 text-2xl p-4 rounded-md ease-in-out duration-300 hover:scale-105 hover:bg-green-600 hover:text-white mb-12">
              Generate Questions
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default JobsAI;
