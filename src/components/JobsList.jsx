import { useContext } from "react";
import { JobsContext } from "../context/Jobs.context";
import { JobCard } from "./JobCard";
import { FadeLoader } from "react-spinners";

const JobsList = ({ selectedCompany }) => {
  const { jobs } = useContext(JobsContext);

  return (
    <div className="lg:flex flex-col gap-4 lg:w-[45vw] hidden">
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70">
          {" "}
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto pb-2">
        {jobs ? (
          selectedCompany.id ? (
            jobs
              .filter((job) => job.companyId === selectedCompany.id)
              .map((job) => <JobCard job={job} key={job.id} />)
          ) : (
            jobs.map((job) => <JobCard job={job} key={job.id} />)
          )
        ) : (
          <FadeLoader />
        )}
      </div>
    </div>
  );
};

export default JobsList;
