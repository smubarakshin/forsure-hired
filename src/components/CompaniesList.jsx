import { useContext, useEffect } from "react";
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

const CompaniesList = ({ setSelectedCompany }) => {
  const { companies } = useContext(CompaniesContext);
  return (
    <div className="flex flex-col gap-2 mr-20 border-r-2 border-solid w-[35vw] ">
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 mb-3">
        <h1
          className="text-center text-4xl  py-2 font-semibold cursor-pointer"
          onClick={() => setSelectedCompany(emptyCompany)}
        >
          All Companies
        </h1>
        <button className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70">
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
