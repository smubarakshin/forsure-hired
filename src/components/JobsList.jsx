import { useContext } from "react";
import { JobsContext } from "../context/Jobs.context";
import { CompaniesContext } from "../context/Companies.context";

const JobsList = () => {
  const { jobs } = useContext(JobsContext);
  const { companies } = useContext(CompaniesContext);
  const companyShortAddress = (job) => {
    const company = companies.find((company) => company.id === job.companyId);
    return (
      company.name + " - " + company.address.city + ", " + company.address.state
    );
  };
  const formatDateToAgo = (date) => {
    let currDate = new Date(date);
    let now = Date.now();
    return Math.floor((now - currDate) / 86400000);
  };

  return (
    <div className="flex flex-col gap-4 w-[50vw]">
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button className="bg-green-700 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:bg-green-600">
          {" "}
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto">
        {jobs ? (
          jobs.map((job) => (
            <div
              className="flex justify-between px-2 shadow-md rounded-lg bg-white "
              key={job.id}
            >
              <div className="flex flex-col gap-2 p-4 ">
                <h1 className="text-3xl">{job.title}</h1>
                <p className="text-slate-400">{companyShortAddress(job)}</p>
              </div>
              <div className="flex flex-col gap-2 py-2 justify-center items-end">
                <h1 className="text-xl">{job.salaryRange}</h1>
                <p className="bg-blue-600 text-white px-2 rounded-3xl">
                  {job.remote}
                </p>
                <p className="text-sm text-slate-500">
                  {formatDateToAgo(job.creationDate)} days Ago
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default JobsList;
