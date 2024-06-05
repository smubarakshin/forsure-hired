import React, { useContext } from "react";
import { useState } from "react";
import CompaniesList from "../components/CompaniesList";
import JobsList from "../components/JobsList";
import arrowBack from "../images/arrow-back.svg";
import { ManageJobForm } from "../components/ManageJobForm";
import { JobsContext } from "../context/Jobs.context";

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

const HomePage = () => {
  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);
  const [showJobModal, setShowJobModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(emptyJob);
  const { addJob } = useContext(JobsContext);

  return (
    <main className="text-slate-700 md:mx-auto md:w-[80%] flex gap-2 md:h-[85vh] md:min-h-[85vh] overflow-hidden">
      <CompaniesList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      {/* <div className="relative md:h-[100%] md:min-h-[100%] overflow-hidden"> */}
      {selectedCompany.id && (
        <img
          src={arrowBack}
          alt="arrow back"
          className="absolute mt-4 left-2 h-10 md:hidden z-20"
          onClick={() => setSelectedCompany(emptyCompany)}
        />
      )}
      <JobsList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        setShowJobModal={setShowJobModal}
      />
      {/* </div> */}
      {showJobModal && (
        <ManageJobForm
          closeModal={setShowJobModal}
          job={currentJob}
          addJob={addJob}
        />
      )}
    </main>
  );
};

export default HomePage;
