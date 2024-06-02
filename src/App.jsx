import { useContext, useState, useEffect } from "react";
import { JobsContext } from "./context/Jobs.context";
import { CompaniesContext } from "./context/Companies.context";
import { ToastContainer } from "react-toastify";
import CompaniesList from "./components/CompaniesList";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import JobsList from "./components/JobsList";

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

function App() {
  // const { jobs } = useContext(JobsContext);
  // const { companies } = useContext(CompaniesContext);
  const [selectedCompany, setSelectedCompany] = useState(emptyCompany);

  // useEffect(() => {
  //   console.log(selectedCompany);
  // }, [selectedCompany]);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="text-slate-700  m-auto  w-[80%] flex gap-2 h-[85vh] max-h-[85vh] overflow-hidden">
        <CompaniesList setSelectedCompany={setSelectedCompany} />
        <JobsList selectedCompany={selectedCompany} />
      </main>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
