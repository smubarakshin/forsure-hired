import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CompaniesContext } from "../context/Companies.context";

import JobsList from "../components/JobsList";
import JobDescription from "../components/JobDescription";

const emptyJob = {
  title: "",
  description: "",
  techs: [],
  creationDate: "",
  salaryRange: "",
  companyId: 0,
  remote: "",
};

function Jobs() {
  const { getCompany } = useContext(CompaniesContext);

  const [selectedJob, setSelectedJob] = useState(emptyJob);
  const [associatedCompany, setAssociatedCompany] = useState(null);

  useEffect(() => {
    setAssociatedCompany(getCompany(selectedJob.companyId));
  }, [selectedJob]);

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

export default Jobs;
