import { useContext } from "react";
import { JobsContext } from "../context/Jobs.context";
import { JobCard } from "./JobCard";
import { FadeLoader } from "react-spinners";

const JobsList = ({ selectedCompany, setSelectedJob, width = "50" }) => {
  const { jobs } = useContext(JobsContext);
  //   const { companies } = useContext(CompaniesContext);
  //   const companyShortAddress = (job) => {
  //     const company = companies.find((company) => company.id === job.companyId);
  //     return (
  //       company.name + " - " + company.address.city + ", " + company.address.state
  //     );
  //   };
  //   const formatDateToAgo = (date) => {
  //     let currDate = new Date(date);
  //     let now = Date.now();
  //     return Math.floor((now - currDate) / 86400000);
  //   };

  return (
    <div className={`flex flex-col gap-4 w-[${width}vw]`}>
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70">
          {" "}
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto">
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
