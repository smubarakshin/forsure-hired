import { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../context/Companies.context";
import { JobsContext } from "../context/Jobs.context";
import { FadeLoader } from "react-spinners";
// Components
import CompanyCard from "./CompanyCard";
import CompanyDropDown3Dots from "./CompanyDropDown3Dots";
import DeleteModal from "./DeleteModal";

import CompanyAddModal from "./CompanyAddModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
  const { companies, deleteCompany } = useContext(CompaniesContext);
  const { jobs, deleteJob } = useContext(JobsContext);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [companyToDeleteId, setCompanyToDeleteId] = useState(null);

  const [companyToEdit, setCompanyToEdit] = useState(null);

  const [editCompanyModal, setEditCompanyModal] = useState(false);

  const handleTrashIconClick = (companyId) => {
    setShowDeleteModal(true);
    setCompanyToDeleteId(companyId);
  };

  const handleDeleteCompany = async () => {
    await jobs.forEach((job) => {
      job.companyId === companyToDeleteId && deleteJob(job.id);
    });
    await deleteCompany(companyToDeleteId);
    setShowDeleteModal(false);
  };

  const handleEditCompany = async (company) => {
    setEditCompanyModal(true);
    setCompanyToEdit(company);
  };

  return (
    <>
      <div
        className={`${
          selectedCompany.id ? "hidden" : "flex"
        } px-[5%] md:px-0 md:flex flex-col md:mr-20 md:border-r-2 md:border-solid md:w-[35vw] w-full mb-6 `}
      >
        {showDeleteModal && (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            handleDeleteCompany={handleDeleteCompany}
          />
        )}
        <div className="inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 mb-6 py-2">
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
          {companies.length ? (
            companies.map((company) => (
              <div className="relative" key={company.id}>
                <div
                  onClick={() => setSelectedCompany(company)}
                  className="cursor-pointer"
                >
                  <CompanyCard
                    company={company}
                    selectedCompany={selectedCompany}
                  />
                </div>

                <CompanyDropDown3Dots
                  company={company}
                  handleTrashIconClick={handleTrashIconClick}
                  handleEditCompany={handleEditCompany}
                />

                {/* <FontAwesomeIcon
                className="absolute top-3 right-8 text-xs text-slate-300 cursor-pointer hover:text-red-500 hover:scale-125"
                icon={faTrash}
                onClick={() => handleTrashIconClick(company.id)}
              /> */}
              </div>
            ))
          ) : (
            <FadeLoader loading={!companies.length} />
          )}
        </div>
      </div>
      {editCompanyModal && (
        <CompanyAddModal
          setShowModal={setShowModal}
          setEditCompanyModal={setEditCompanyModal}
          company={companyToEdit}
        />
      )}
    </>
  );
};

export default CompaniesList;
