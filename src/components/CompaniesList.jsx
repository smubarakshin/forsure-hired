import { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../context/Companies.context";
import CompanyCard from "./CompanyCard";
import { FadeLoader } from "react-spinners";

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

const CompaniesList = ({
  selectedCompany,
  setSelectedCompany,
  setShowModal,
}) => {
  const { companies } = useContext(CompaniesContext);

  return (
    <div
      className={`${
        selectedCompany.id ? "hidden" : "flex"
      } md:flex flex-col gap-2 md:mr-20 md:border-r-2 md:border-solid md:w-[35vw] w-full  `}
    >
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 mb-3 py-2">
        <h1
          className="text-center text-4xl  py-2 font-semibold cursor-pointer"
          onClick={() => setSelectedCompany(emptyCompany)}
        >
          All Companies
        </h1>
        <button
          className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70"
          onClick={() => setShowModal(true)}
        >
          {" "}
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto pb-2">
        {companies ? (
          companies.map((company) => (
            <div
              onClick={() => setSelectedCompany(company)}
              className="cursor-pointer "
              key={company.id}
            >
              <CompanyCard company={company} />
            </div>
          ))
        ) : (
          <FadeLoader loading={!companies.length} />
        )}
      </div>
    </div>
  );
};

export default CompaniesList;
