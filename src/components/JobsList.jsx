import { useContext } from "react";
import { JobsContext } from "../context/Jobs.context";
import { JobCard } from "./JobCard";
import { FadeLoader } from "react-spinners";

const emptyCompany = {
  logo: "",
  name: "",
  address: {
    street: "",
    city: "",
    state: "",
  },
  rating: 0,
};

const JobsList = ({
  selectedCompany = null,
  setSelectedCompany,
  setSelectedJob,
  width = "40",
}) => {
  const { jobs } = useContext(JobsContext);

  return (
    <div
      className={`${
        selectedCompany && !selectedCompany.id ? "hidden" : "flex"
      } md:flex flex-col gap-4 md:w-[${width}vw] w-full`}
    >
      <div className="relative inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 w-full mb-3 ">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70">
          {" "}
          Add New
        </button>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto pb-2 ">
        {selectedCompany ? (
          <>
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
          </>
        ) : (
          <>
            {jobs ? (
              jobs.map((job) => (
                <div
                  onClick={() => setSelectedJob(job)}
                  className="cursor-pointer"
                  key={job.id}
                >
                  <JobCard job={job} key={job.id} />
                </div>
              ))
            ) : (
              <FadeLoader />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsList;
