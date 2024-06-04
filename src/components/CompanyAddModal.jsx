import React, { useContext, useState } from "react";
import { CompaniesContext } from "../context/Companies.context";

function CompanyAddModal({ setShowModal }) {
  const [company, setCompany] = useState({
    logo: "",
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
    rating: 0,
  });

  const { addCompany } = useContext(CompaniesContext);

  const [formData, setFormData] = useState({ ...company });

  console.log(formData)

  // Changes the state of the form everytime there is a change
  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
        // if(event.target.name === "") {

        // }

      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Validated the form (checks if all inputs are filled out)
//   const isFormFilled = () => {
//     for (let key in formData) {
//       if (formData[key] === "") {
//         return false;
//       }
//     }
//     return true;
//   };

  const handleSubmit = (e) => {
    addCompany(e, formData);
    setShowModal(false);
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
                {formData.id ? "Task Details" : "Create Task"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
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
                      required
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
                      required
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
                      required
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
                      required
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
                      value={formData.state}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="state"
                      name="address.state"
                      type="text"
                      placeholder="State"
                      required
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
                      required
                    />
                  </div>
                </div>



                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-slate-600 bg-gray-300 hover:bg-gray-400 font-bold uppercase px-6 py-3 text-sm outline-none rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#775DA6] hover:bg-[#544274] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:hover:bg-[#775DA6]"
                    type="submit"
                    // disabled={
                    //   !isFormFilled() ||
                    //   JSON.stringify(formData) === JSON.stringify(company)
                    // }
                    onClick={handleSubmit}
                  >
                    {formData.id ? "Cancel" : "Create"}
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
