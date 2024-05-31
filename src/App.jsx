import { useContext } from "react";
import { JobsContext } from "./context/Jobs.context";
import { CompaniesContext } from "./context/Companies.context";
import { ToastContainer } from "react-toastify";

function App() {
  // const { jobs } = useContext(JobsContext);
  // const { companies } = useContext(CompaniesContext);

  return (
    <div className="text-5xl font-bold underline">
      asd
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
