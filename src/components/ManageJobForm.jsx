import React, { useContext, useState } from "react";
import { CompaniesContext } from "../context/Companies.context";

export const ManageJobForm = ({
  closeModal,
  job,
  addJob,
  updateJob,
  setSelectedJob,
}) => {
  const [formData, setFormData] = useState({ ...job });
  const { companies } = useContext(CompaniesContext);

  // Captures the current date
  const datePickerId = new Date().toISOString().split("T")[0];

  // Changes the state of the form everytime there is a change
  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
      return event.target.name === "companyId"
        ? {
            ...prevFormData,
            [event.target.name]: Number(event.target.value),
          }
        : {
            ...prevFormData,
            [event.target.name]: event.target.value,
          };
    });
  };
  // Validated the form (checks if all inputs are filled out)
  const isFormFilled = () => {
    for (let key in formData) {
      if (!formData[key]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const techsArr = formData.techs.toString().split(",");
    formData.techs = techsArr;
    if (formData.id) {
      updateJob(formData, formData.id);
      setSelectedJob(formData);
    } else {
      addJob(formData);
    }
    closeModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl max-[500px]:mx-4">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl text-gray-700 font-semibold">
                {formData.id ? "Job Details" : "Create Job"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal(false)}
              >
                <span className="bg-transparent text-red-500  h-6 w-6 text-2xl block outline-none focus:outline-none hover:scale-125">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                {/* Title */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.title}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Job Title"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={handleFormChange}
                      value={formData.description}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="description"
                      name="description"
                      type="text"
                      placeholder="A description of your Job"
                    />
                  </div>
                </div>

                {/* techs, salary and remote */}
                <div className="flex flex-col -mx-3 mb-6">
                  <div className="w-full  px-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="techs"
                    >
                      Techs
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.techs}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="techs"
                      name="techs"
                      type="text"
                      placeholder="Separates by commas"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2 md:flex-row px-3 md:mb-0">
                    <div className="md:w-1/2">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="remote"
                      >
                        Type
                      </label>
                      <div className="relative">
                        <select
                          onChange={handleFormChange}
                          defaultValue={formData.remote}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="remote"
                          name="remote"
                        >
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="On Site">On Site</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="salaryRange"
                      >
                        Salary Range
                      </label>
                      <input
                        onChange={handleFormChange}
                        value={formData.salaryRange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="salaryRange"
                        name="salaryRange"
                        type="text"
                        placeholder="Ex: $75K - $115K"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Date Picker for appliedDate */}
                <div className="flex -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="companyId"
                    >
                      Company
                    </label>
                    <div className="relative">
                      <select
                        onChange={handleFormChange}
                        defaultValue={formData.companyId}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="companyId"
                        name="companyId"
                      >
                        {companies.map((comp) => (
                          <option key={comp.id} value={comp.id}>
                            {comp.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="creationDate"
                    >
                      Applied Date
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.creationDate}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="creationDate"
                      name="creationDate"
                      type="date"
                      placeholder=""
                      max={datePickerId}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-slate-600 bg-gray-300 hover:bg-gray-400 font-bold uppercase px-6 py-3 text-sm outline-none rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => closeModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#775DA6] hover:bg-[#544274] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:hover:bg-[#775DA6]"
                    type="submit"
                    disabled={
                      !isFormFilled() ||
                      JSON.stringify(formData) === JSON.stringify(job)
                    }
                  >
                    {formData.id ? "Save" : "Create"}
                  </button>
                </div>
              </form>
            </div>

            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
