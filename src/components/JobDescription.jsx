import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function JobDescription({ selectedJob, associatedCompany }) {
  const formatDateToAgo = (date) => {
    let currDate = new Date(date);
    let now = Date.now();
    return Math.floor((now - currDate) / 86400000);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-[50vw]">
        <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2">
          <h1 className="text-center text-4xl  py-2 font-semibold  ">
            Job Description
          </h1>
        </div>
        {selectedJob && associatedCompany ? (
          <div className="my-0 mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-20 object-cover"
                src={associatedCompany.logo}
                alt="company logo"
              />
              <div>
                <p className="text-xl font-semibold">
                  {associatedCompany.name}
                </p>
              </div>
            </div>

            <div className="border-b-2 border-slate-300 pb-4 mb-4">
              <h2 className="text-4xl font-bold tracking-wide mb-4">
                {selectedJob.title}
              </h2>
              <p>Posted {formatDateToAgo(selectedJob.creationDate)} days ago</p>
            </div>

            <div className="border-b-2 border-slate-300 pb-4 mb-4">
              <h3 className="font-semibold text-2xl mb-6">Details</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8">
                  <FontAwesomeIcon
                    className="text-2xl"
                    icon={faMoneyCheckDollar}
                  />
                </div>
                <p className="font-semibold">{selectedJob.salaryRange}/yr</p>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8">
                  <FontAwesomeIcon className="text-2xl" icon={faLocationDot} />
                </div>
                <div>
                  <p className="font-semibold">
                    {selectedJob.remote}
                    {selectedJob.remote !== "Remote" &&
                      `, based in ${associatedCompany.address.city}, ${associatedCompany.address.state}`}
                  </p>
                  <p>
                    {selectedJob.remote === "Remote"
                      ? "Work from home"
                      : selectedJob.remote === "Hybrid"
                      ? "Work in person for part of the week, from the location"
                      : "Work in person from the location"}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-slate-300 pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">
                {associatedCompany.name}
              </h3>
              <p className="mb-1">{selectedJob.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What they're looking for
              </h3>
              <div className="flex gap-2 flex-wrap w-[75%]">
                {selectedJob.techs.map((tech, index) => {
                  return (
                    <>
                      <p
                        className="bg-slate-200 w-fit py-2 px-4 rounded font-semibold"
                        key={index}
                      >
                        {tech}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-center text-3xl">No Job Selected</h2>
          </>
        )}
      </div>
    </>
  );
}

export default JobDescription;