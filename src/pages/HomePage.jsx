import React from "react";
import { useState } from "react";
import CompaniesList from "../components/CompaniesList";
import JobsList from "../components/JobsList";
import arrowBack from "../images/arrow-back.svg";

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
    <main className="text-slate-700 mx-auto md:w-[80%] flex gap-2 md:h-[85vh] md:min-h-[85vh] overflow-hidden">
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
      />
      {/* </div> */}
    </main>
  );
};

export default HomePage;
