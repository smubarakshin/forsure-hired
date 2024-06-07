import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../context/Companies.context";

function CompanyAddModal({
  setShowModal = null,
  setEditCompanyModal = null,
  company,
}) {
  const { addCompany, updateCompany } = useContext(CompaniesContext);

  const [formData, setFormData] = useState({ ...company });

  // Changes the state of the form everytime there is a change
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const nameParts = name.split(".");

    if (nameParts[0] === "address") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        address: {
          ...prevFormData.address,
          [nameParts[1]]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    formData.id
      ? updateCompany(e, formData, formData.id)
      : addCompany(e, formData);
    closeModals();
  };

  const closeModals = () => {
    setEditCompanyModal ? setEditCompanyModal(false) : setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="overflow-y-auto relative w-auto max-[385px]:mt-[225px] md:mt-0 my-6 mx-auto max-w-3xl max-[500px]:mx-4">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl text-gray-700 font-semibold">
                {formData.id ? "Company Details" : "Create Company"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModals}
              >
                <span className="bg-transparent text-red-500  h-6 w-6 text-2xl block outline-none focus:outline-none hover:scale-125">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                {/* Company Logo */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="logo"
                    >
                      Logo:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.logo}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="logo"
                      name="logo"
                      type="url"
                      placeholder="Logo"
                      required={true}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.name}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Company"
                      required={true}
                    />
                  </div>
                </div>

                {/* Address Description */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <span
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="address"
                      id="address"
                      name="address"
                    >
                      Address:
                    </span>
                  </div>

                  {/* Address > Street */}
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="street"
                    >
                      Street:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.address.street}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="street"
                      name="address.street"
                      type="text"
                      placeholder="Street"
                      required={true}
                    />
                  </div>

                  {/* Address > City */}
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="city"
                    >
                      City:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.address.city}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="city"
                      name="address.city"
                      type="text"
                      placeholder="City"
                      required={true}
                    />
                  </div>

                  {/* Address > State */}
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="state"
                    >
                      State:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.address.state}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="state"
                      name="address.state"
                      type="text"
                      placeholder="State"
                      required={true}
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="rating"
                    >
                      Rating:
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.rating}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="rating"
                      name="rating"
                      type="text"
                      placeholder="Rating"
                      required={true}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-slate-600 bg-gray-300 hover:bg-gray-400 font-bold uppercase px-6 py-3 text-sm outline-none rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={closeModals}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-600 hover:opacity-70 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:hover:bg-green-600"
                    type="submit"
                    disabled={
                      JSON.stringify(formData) === JSON.stringify(company)
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
}

export default CompanyAddModal;
