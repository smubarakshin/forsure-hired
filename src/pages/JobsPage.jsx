import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CompaniesContext } from "../context/Companies.context";
import arrowBack from "../images/arrow-back.svg";

import JobsList from "../components/JobsList";
import JobDescription from "../components/JobDescription";
import { useParams } from "react-router-dom";
import { JobsContext } from "../context/Jobs.context";
import { ManageJobForm } from "../components/ManageJobForm";

const emptyJob = {
  title: "",
  description: "",
  techs: [],
  creationDate: "",
  salaryRange: "",
  companyId: 0,
  remote: "",
};

function JobsPage() {
  const { getCompany } = useContext(CompaniesContext);
  const { getJob, addJob } = useContext(JobsContext);
  const { jobId } = useParams();
  const [showJobModal, setShowJobModal] = useState(false);

  const [selectedJob, setSelectedJob] = useState(emptyJob);

  const [associatedCompany, setAssociatedCompany] = useState(null);

  useEffect(() => {
    setAssociatedCompany(getCompany(selectedJob.companyId));
  }, [selectedJob]);

  useEffect(() => {
    if (jobId) {
      const fetchJob = async () => {
        const jobData = await getJob(jobId);
        setSelectedJob(jobData);
      };

      fetchJob();
    }
  }, [jobId]);

  return (
    <main className="text-slate-700 mx-auto md:w-[80%] flex gap-2 md:h-[85vh] md:max-h-[85vh] md:overflow-hidden">
      <JobsList
        setSelectedJob={setSelectedJob}
        selectedJob={selectedJob}
        setShowJobModal={setShowJobModal}
        width="40"
      />
      {selectedJob.id && (
        <img
          src={arrowBack}
          alt="arrow back"
          className="absolute mt-4 left-2 h-10 md:hidden z-20"
          onClick={() => setSelectedJob(emptyJob)}
        />
      )}
      <JobDescription
        selectedJob={selectedJob}
        associatedCompany={associatedCompany}
        setSelectedJob={setSelectedJob}
      />
      {showJobModal && (
        <ManageJobForm
          closeModal={setShowJobModal}
          job={emptyJob}
          addJob={addJob}
        />
      )}
    </main>
  );
}

export default JobsPage;
