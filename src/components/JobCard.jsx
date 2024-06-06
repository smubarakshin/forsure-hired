import React, { useContext } from "react";
import { CompaniesContext } from "../context/Companies.context";
import { Link } from "react-router-dom";

export const JobCard = ({ job, selectedJob }) => {
  const { companies } = useContext(CompaniesContext);

  const companyShortAddress = (job) => {
    const company =
      companies.length &&
      companies.find((company) => company.id === job.companyId);
    if (company) {
      return (
        company.name +
        " - " +
        company.address.city +
        ", " +
        company.address.state
      );
    } else {
      return "N/A";
    }
  };

  const formatDateToAgo = (date) => {
    let currDate = new Date(date);
    let now = Date.now();
    return Math.floor((now - currDate) / 86400000);
  };
  console.log(job);

  return (
    <Link to={`/jobs/${job.id}`}>
      <div
        className={`flex justify-between px-2 rounded-lg bg-white cursor-pointer transition-all ${
          !selectedJob && "shadow-md hover:shadow-none hover:translate-y-[2px]"
        } ${selectedJob && job.id === selectedJob.id && "bg-green-200"}`}
      >
        <div className="flex flex-col gap-2 p-4 ">
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <p className="text-slate-400">{companyShortAddress(job)}</p>
          <p className=" text-white flex gap-1 flex-wrap">
            {job.techs.map((tech, i) => (
              <span
                key={i}
                className="bg-green-600 px-2 text-sm rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-2 px-4 justify-center items-end">
          <h1 className="text-xl whitespace-nowrap">{job.salaryRange}</h1>
          <p className="bg-blue-600 text-white px-2 rounded-3xl">
            {job.remote}
          </p>
          <p className="text-sm text-slate-500 whitespace-nowrap">
            {formatDateToAgo(job.creationDate)} days Ago
          </p>
        </div>
      </div>
    </Link>
  );
};
