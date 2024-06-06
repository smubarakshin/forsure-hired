import React, { useEffect, useState, useContext } from "react";
import { softwareEngineerJobDescription } from "../defaultJobDescriptions";
import axios from "axios";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { useParams } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import { useNavigate } from "react-router-dom";

import { JobsContext } from "../context/Jobs.context";

import AnswerAccordion from "../components/AnswerAccordion";

const apiKey = import.meta.env.VITE_REACT_API_KEY;

function JobsAI() {
  const [jobDescription, setJobDescription] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState(null);

  const [questionType, setQuestionType] = useState("behavioral");

  const [chatGPTJSONResponse, setChatGPTJSONResponse] = useState(null);

  // States and values if user came from Jobs Page (/ai/:jobId)
  const [currentJob, setCurrentJob] = useState(null);
  const [descriptionFromJobPage, setDescriptionFromJobPage] = useState(null);
  const { getJob } = useContext(JobsContext);
  const { jobId } = useParams();
  const navigate = useNavigate();

  const generateJobDescription = (job) => {
    return `Title: ${job.title}\n
${job.description}\n
Technologies: ${job.techs.join(", ")}`;
  };

  const getCurrentJob = async (id) => {
    const job = await getJob(id);
    setCurrentJob(job);
    const description = generateJobDescription(job);
    setJobDescription(description);
    setDescriptionFromJobPage(description);
  };

  useEffect(() => {
    if (jobId) {
      getCurrentJob(jobId);
    }
  }, [jobId, getJob]);

  const handleChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleQuestionTypeClick = (e) => {
    e.preventDefault();
    e.target.value === "behavioral"
      ? setQuestionType("behavioral")
      : setQuestionType("technical");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTyping(true);

    const systemMessage = {
      role: "system",
      content: `I have a job description pasted below. Based on this job description, generate a list of 10 interview questions that are relevant to the role, responsibilities, and qualifications mentioned. Make sure the questions cover both technical and behavioral aspects suitable for assessing the candidate's fit for the position.

      I also want you to provide sample answers to each of the questions generated, simulating what a suitable candidate might say in response to each question. Ensure that the sample answers follow the STAR method (Situation, Task, Action, Result).

      I want your response to be generated in the following JSON format, without any additional text or formatting:
    
      "response": {
           "behavioral": {
              "questions" : ["Behavioral Question 1", "Behavioral Question 2", ..., "Behavioral Question 5"],
              "answers" : ["Answer to Behavioral Question 1", "Answer to Behavioral Question 2", ..., "Answer to Behavioral Question 5"]
           },
           "technical": {
              "questions" : ["Technical Question 1", "Technical Question 2", ..., "Technical Question 5"],
              "answers" : ["Answer to Technical Question 1", "Answer to Technical Question 2", ..., "Answer to Technical Question 5"]
           },
      }
      
      This is the Job Description:
       ${jobDescription}`,
    };

    const userMessage = {
      role: "user",
      content: jobDescription,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        apiRequestBody,
        {
          headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      setChatGPTResponse(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setTyping(false);
    }
  };

  useEffect(() => {
    try {
      let parseResponse = JSON.parse(chatGPTResponse);
      setChatGPTJSONResponse(parseResponse);
    } catch (error) {
      console.log(error);
    }
  }, [chatGPTResponse]);

  return (
    <>
      <div className="mt-6 sm:mt-12 md:mt-16 flex flex-col items-center text-slate-700">
        {!chatGPTJSONResponse ? (
          <>
            <h1 className="w-full text-3xl sm:text-4xl text-center font-semibold relative px-4 mb-6">
              Provide a Job Description
            </h1>
            <form
              className="flex flex-col items-center w-[90%] md:w-full max-w-[700px]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {descriptionFromJobPage && (
                  <label
                    className={`p-4 rounded cursor-pointer ${
                      typing && "cursor-not-allowed"
                    } ${
                      jobDescription === descriptionFromJobPage
                        ? "bg-green-100 border border-1 border-green-600 text-green-700"
                        : "bg-slate-200 hover:bg-slate-300"
                    }`}
                    htmlFor="descriptionFromJobPage"
                  >
                    <input
                      className="sr-only peer"
                      onChange={handleChange}
                      type="radio"
                      name="jobDescription"
                      id="descriptionFromJobPage"
                      value={descriptionFromJobPage}
                      checked={jobDescription === descriptionFromJobPage}
                      disabled={typing ? true : false}
                    />
                    <span>Current Job</span>
                  </label>
                )}
                <label
                  className={`p-4 rounded cursor-pointer ${
                    typing && "cursor-not-allowed"
                  } ${
                    jobDescription === ""
                      ? "bg-green-100 border border-1 border-green-600 text-green-700"
                      : "bg-slate-200 hover:bg-slate-300"
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
                    disabled={typing ? true : false}
                  />
                  <span>Custom</span>
                </label>
                <label
                  className={`p-4 rounded cursor-pointer ${
                    typing && "cursor-not-allowed"
                  } ${
                    jobDescription === softwareEngineerJobDescription
                      ? "bg-green-100 border border-1 border-green-600 text-green-700"
                      : "bg-slate-200 hover:bg-slate-300"
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
                    disabled={typing ? true : false}
                  />
                  <span>Example Description</span>
                </label>
              </div>

              <textarea
                className="w-full max-w-[700px] border-2 slate-200 rounded-md p-4 resize-none mb-12"
                name=""
                id=""
                rows={12}
                placeholder="Select a Example Description to view a template or paste your own description here"
                value={jobDescription}
                onChange={handleChange}
                required={true}
              />

              {typing ? (
                <TypingIndicator
                  className="text-2xl"
                  content="Generating Questions"
                />
              ) : (
                <button className="bg-slate-200 text-xl p-4 rounded-md ease-in-out duration-300 hover:scale-105 hover:bg-green-400 hover:text-white mb-12">
                  Generate Questions
                </button>
              )}
            </form>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-semibold mb-8 text-center">
              Interview Questions
            </h1>

            <div className="flex gap-4 mb-10">
              <button
                className={`p-4 rounded cursor-pointer ${
                  questionType === "behavioral"
                    ? "bg-green-100 border border-1 border-green-600 text-green-700"
                    : "bg-slate-200 hover:bg-slate-300"
                }`}
                value={"behavioral"}
                onClick={handleQuestionTypeClick}
              >
                Behavioral
              </button>
              <button
                className={`p-4 rounded cursor-pointer ${
                  questionType === "technical"
                    ? "bg-green-100 border border-1 border-green-600 text-green-700"
                    : "bg-slate-200 hover:bg-slate-300"
                }`}
                value={"technical"}
                onClick={handleQuestionTypeClick}
              >
                Technical
              </button>
            </div>

            {questionType === "behavioral" ? (
              <>
                {chatGPTJSONResponse.response.behavioral.questions.map(
                  (question, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[90%] lg:w-full max-w-[700px] mb-10 bg-slate-200 rounded p-4"
                      >
                        <h2 className="text-2xl font-semibold mb-4">
                          Question {index + 1}
                        </h2>
                        <p className="tracking-wide mb-4 text-lg">{question}</p>
                        {/* <p className="w-fit font-semibold cursor-pointer hover:text-green-600">
                          Show Answer
                        </p> */}
                        <AnswerAccordion
                          answer={
                            chatGPTJSONResponse.response.behavioral.answers[
                              index
                            ]
                          }
                        />
                      </div>
                    );
                  }
                )}
              </>
            ) : (
              <>
                {chatGPTJSONResponse.response.technical.questions.map(
                  (question, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[90%] lg:w-full max-w-[700px] mb-10 bg-slate-200 rounded p-4"
                      >
                        <h2 className="text-2xl font-semibold mb-4">
                          Question {index + 1}
                        </h2>
                        <p className="tracking-wide mb-4 text-lg">{question}</p>
                        {/* <p className="w-fit font-semibold cursor-pointer hover:text-green-600">
                          Show Answer
                        </p> */}
                        <AnswerAccordion
                          answer={
                            chatGPTJSONResponse.response.technical.answers[
                              index
                            ]
                          }
                        />
                      </div>
                    );
                  }
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default JobsAI;

/*
```json
{
  "response": {
      "behavioral": {
          "questions": [
              "Can you describe a project where you had to collaborate with a team of marketing professionals?",
              "How do you prioritize tasks when working on multiple projects simultaneously?",
              "Can you provide an example of a time when you had to deal with a difficult client or stakeholder?",
              "How do you stay updated with the latest web development trends and technologies?",
              "Describe a situation where you had to meet a tight deadline. How did you ensure timely delivery?"
          ],
          "answers": [
              "In my previous role, I collaborated with the marketing team to revamp the university website, ensuring the design reflected our brand and marketing goals. We held regular meetings to align on objectives and provided progress updates throughout the project.",
              "When faced with multiple projects, I use priority matrices to identify critical tasks and deadlines, ensuring that the most urgent items are completed first. I also communicate with project stakeholders to manage expectations.",
              "I once encountered a challenging stakeholder who had specific design preferences that conflicted with best practices. I actively listened to their concerns, provided alternative solutions with clear justifications, and ultimately found a compromise that satisfied both parties.",
              "I regularly attend web development conferences, participate in online forums like Stack Overflow, and follow industry blogs to stay informed about the latest trends. I also enjoy experimenting with new technologies in my personal projects.",
              "During a website launch, we faced unexpected technical issues that jeopardized the deadline. To ensure timely delivery, I coordinated closely with the development team, delegated tasks effectively, and worked extra hours to resolve the issues and deliver the project on time."
          ]
      },
      "technical": {
          "questions": [
              "Can you explain a project where you used HTML5 and CSS extensively? What challenges did you encounter?",
              "How do you ensure the performance optimization of websites using jQuery, JavaScript, PHP, and MySQL?",
              "Have you worked with XML and XSLT before? Can you give an example of a project where you utilized these technologies?",
              "What experience do you have with enterprise-level CMS like Cascade or Omni CMS?",
              "Can you discuss your approach to developing websites on WordPress, including customization and plugin management?"
          ],
          "answers": [
              "In a recent project, I developed a responsive website using HTML5 and CSS to improve user experience. One challenge was ensuring cross-browser compatibility, which I addressed by using polyfills for older browsers.",
              "I focus on minimizing server requests, optimizing code, caching resources, and using asynchronous loading techniques to enhance website performance with jQuery, JavaScript, PHP, and MySQL.",
              "I have used XML and XSLT to transform raw data into a structured format for dynamic content generation on e-commerce websites. For instance, I implemented XSLT to transform XML product data into HTML product listings.",
              "I have experience working with Cascade CMS, where I created templates for various sections of a university website, allowing content editors to easily update pages without technical knowledge.",
              "When developing on WordPress, I prioritize choosing lightweight themes, leveraging child themes for customizations, and carefully selecting plugins to ensure compatibility and security. I also regularly update WordPress core and plugins to maintain site integrity."
          ]
      }
  }
}
```
*/
