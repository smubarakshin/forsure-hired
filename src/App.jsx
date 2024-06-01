import { useContext } from "react";
import { JobsContext } from "./context/Jobs.context";
import { CompaniesContext } from "./context/Companies.context";
import { ToastContainer } from "react-toastify";
import CompaniesList from "./components/CompaniesList";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import JobsList from "./components/JobsList";

function App() {
  // const { jobs } = useContext(JobsContext);
  // const { companies } = useContext(CompaniesContext);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="text-slate-700  m-auto  w-[80%] flex gap-2 h-[85vh] max-h-[85vh] overflow-hidden">
        <CompaniesList />
        <JobsList />
      </main>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
