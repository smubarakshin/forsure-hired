import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CompaniesContext } from "../context/Companies.context";

import JobsList from "../components/JobsList";
import JobDescription from "../components/JobDescription";
import { useParams } from "react-router-dom";
import { JobsContext } from "../context/Jobs.context";

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
  const { getJob } = useContext(JobsContext);
  const { jobId } = useParams();

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
    <main className="text-slate-700  m-auto  w-[80%] flex gap-2 h-[85vh] max-h-[85vh] overflow-hidden">
      <JobsList setSelectedJob={setSelectedJob} width="40" />
      <JobDescription
        selectedJob={selectedJob}
        associatedCompany={associatedCompany}
      />
    </main>
  );
}

export default JobsPage;
