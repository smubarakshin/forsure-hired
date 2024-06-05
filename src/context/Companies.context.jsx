import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { comma } from "postcss/lib/list";

const CompaniesContext = createContext();
const API_URL = "https://json-server-tpl.adaptable.app/companies/";

function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      const response = await axios.get(API_URL);
      setCompanies(response.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  };
  //need to be called in useEffect after companies state changes
  const getCompany = (companyId) => {
    return companies.find((company) => company.id === companyId);
  };

  const addressToString = (company) => {
    return (
      company.address.street +
      ", " +
      company.address.city +
      ", " +
      company.address.state
    );
  };

  const addCompany = async (ev, companyData) => {
    ev.preventDefault();
    try {
      const response = await axios.post(API_URL, companyData);
      setCompanies([response.data, ...companies]);
      response.statusText === 201 &&
        toast.success("Company Added Successfull!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCompany = async (companyId) => {
    try {
      const response = await axios.delete(API_URL + companyId);
      setCompanies((prevCompanies) =>
        prevCompanies.filter((comp) => comp.id !== companyId)
      );
      response.status === 200 &&
        toast.error("Company Deleted!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCompany = async (ev, companyData, companyId) => {
    ev.preventDefault();
    try {
      const response = await axios.put(API_URL + companyId, companyData);
      response.status === 200 &&
        toast.success("Company Updated Successfull!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        addCompany,
        updateCompany,
        getAllCompanies,
        getCompany,
        deleteCompany,
        addressToString,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}

export { CompaniesProvider, CompaniesContext };
