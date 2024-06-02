import React from "react";
import JobsList from "../components/JobsList";

import { useState } from "react";

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
  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);
  const [selectedJob, setSelectedJob] = useState(emptyJob);

  return (
    <main className="text-slate-700  m-auto  w-[80%] flex gap-2 h-[85vh] max-h-[85vh] overflow-hidden">
      <JobsList
        selectedCompany={selectedCompany}
        setSelectedJob={setSelectedJob}
        width="40"
      />
    </main>
  );
}

export default Jobs;
