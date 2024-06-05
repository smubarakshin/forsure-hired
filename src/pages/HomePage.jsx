
import { ManageJobForm } from "../components/ManageJobForm";
import { JobsContext } from "../context/Jobs.context";

import { useContext, useState, useEffect } from "react";
import { CompaniesContext } from "../context/Companies.context";


import arrowBack from "../images/arrow-back.svg";

import CompaniesList from "../components/CompaniesList";
import JobsList from "../components/JobsList";
import CompanyAddModal from "../components/CompanyAddModal";
import DeleteModal from "../components/DeleteModal";


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
  const { companies, getAllCompanies } = useContext(CompaniesContext);
  
  // const [companiesCopy, setCompaniesCopy] = useState(companies);

  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);

  const [showJobModal, setShowJobModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(emptyJob);
  const { addJob } = useContext(JobsContext);

  const [showModal, setShowModal] = useState(false);



  return (
    <main className="text-slate-700 md:mx-auto md:w-[80%] flex gap-2 md:h-[85vh] md:min-h-[85vh] overflow-hidden">
      
      <CompaniesList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        setShowModal={setShowModal}
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
      {showModal && <CompanyAddModal setShowModal={setShowModal} />}
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
