import React from "react";
import { useContext, useState, useEffect } from "react";
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
  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);
  const [showModal, setShowModal] = useState(false);


  return (
    <main className="text-slate-700  m-auto  w-[80%] flex gap-2 h-[85vh] max-h-[85vh] overflow-hidden">
      <CompaniesList setSelectedCompany={setSelectedCompany} setShowModal={setShowModal} showModal={showModal}/>
      <JobsList selectedCompany={selectedCompany} />
      {showModal && (<CompanyAddModal/>) }
    </main>
  );
};

export default HomePage;
