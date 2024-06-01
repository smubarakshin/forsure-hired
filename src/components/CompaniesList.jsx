import { useContext, useEffect } from "react";
import { CompaniesContext } from "../context/Companies.context";
import CompanieCard from "./CompanieCard";

const CompaniesList = () => {
  const { companies } = useContext(CompaniesContext);
  return (
    <div className="flex flex-col gap-4 mr-20 border-r-2 border-solid w-[35vw] overflow-y-auto">
      <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">
          Companies
        </h1>
        <button className="bg-green-700 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:bg-green-600">
          {" "}
          Add New
        </button>
      </div>
      {companies ? (
        companies.map((company) => (
          <CompanieCard key={company.id} company={company} />
        ))
      ) : (
        <p>LoaderFunctionArgs..</p>
      )}
    </div>
  );
};

export default CompaniesList;
