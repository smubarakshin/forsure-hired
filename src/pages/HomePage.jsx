import React from "react";
import { useContext, useState, useEffect } from "react";
import { CompaniesContext } from "../context/Companies.context";

import CompaniesList from "../components/CompaniesList";
import JobsList from "../components/JobsList";
import CompanyAddModal from "../components/CompanyAddModal";

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

const HomePage = () => {
  const { companies, getAllCompanies } = useContext(CompaniesContext);
  const [companiesCopy, setCompaniesCopy] = useState(companies);

  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);
  const [showModal, setShowModal] = useState(false);

  // console.log(companies);
  useEffect(() => {
    getAllCompanies();
  }, [companiesCopy]);

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
      />
      {showModal && <CompanyAddModal setShowModal={setShowModal} />}
      {/* </div> */}
    </main>
  );
};

export default HomePage;
