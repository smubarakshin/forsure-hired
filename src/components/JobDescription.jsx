import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import DropDown3Dots from "./DropDown3Dots";
import DeleteJobModal from "./DeleteJobModal";
import { JobsContext } from "../context/Jobs.context";
import { ManageJobForm } from "../components/ManageJobForm";

function JobDescription({ selectedJob, setSelectedJob, associatedCompany }) {
  const [showDeleteJobModal, setShowDeleteJobModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { deleteJob, updateJob } = useContext(JobsContext);
  const formatDateToAgo = (date) => {
    let currDate = new Date(date);
    let now = Date.now();
    return Math.floor((now - currDate) / 86400000);
  };

  return (
    <div
      className={`${
        !selectedJob.id ? "hidden" : "flex"
      } md:flex flex-col gap-4 min-w-[50vw] px-2 w-full`}
    >
      <div className="inline-flex justify-evenly">
        {/* <h1 className="text-center text-4xl  py-2 font-semibold  ">
          Job Details
        </h1> */}
      </div>
      {selectedJob && associatedCompany ? (
        <div className="my-0 px-10 py-10 bg-white rounded-lg overflow-y-auto relative">
          <div className="lg:w-[75%] lg:mx-auto">
            <div className="absolute top-4 right-4">
              <DropDown3Dots
                setShowDeleteJobModal={setShowDeleteJobModal}
                setShowJobModal={setShowJobModal}
                selectedJob={selectedJob}
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-16 rounded-md object-cover"
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
              <h2 className="text-3xl font-bold tracking-wide mb-4">
                {selectedJob.title}
              </h2>
              <p>
                Applied {formatDateToAgo(selectedJob.creationDate)} days ago
              </p>
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
              <pre
                className={`${
                  showMore ? "whitespace-pre-wrap" : "truncate"
                } text-slate-700 font-sans mb-1`}
              >
                {selectedJob.description}
              </pre>

              <p
                onClick={() => setShowMore(!showMore)}
                className="font-semibold underline cursor-pointer"
              >
                Show {showMore ? "less" : "more"}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What they're looking for
              </h3>
              <div className="flex gap-2 flex-wrap w-[75%]">
                {selectedJob.techs.map((tech, index) => {
                  return (
                    <p
                      className="bg-slate-200 min-w-fit py-2 px-4 rounded font-semibold whitespace-nowrap"
                      key={index}
                    >
                      {tech}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-center text-3xl">No Job Selected</h2>
        </>
      )}
      {showDeleteJobModal && (
        <DeleteJobModal
          setShowDeleteJobModal={setShowDeleteJobModal}
          selectedJob={selectedJob}
          deleteJob={deleteJob}
          setSelectedJob={setSelectedJob}
        />
      )}
      {showJobModal && (
        <ManageJobForm
          closeModal={setShowJobModal}
          job={selectedJob}
          updateJob={updateJob}
          setSelectedJob={setSelectedJob}
        />
      )}
    </div>
  );
}

export default JobDescription;
