import React from "react";
import { useContext, useState, useEffect } from "react";
import CompaniesList from "../components/CompaniesList";
import JobsList from "../components/JobsList";

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

  return (
    <main className="text-slate-700  m-auto  md:w-[80%] flex gap-2 md:h-[85vh] md:min-h-[85vh] overflow-hidden">
      <CompaniesList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      <JobsList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
    </main>
  );
};

export default HomePage;
