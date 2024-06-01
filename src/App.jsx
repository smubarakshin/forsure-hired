import { useContext } from "react";
import { JobsContext } from "./context/Jobs.context";
import { CompaniesContext } from "./context/Companies.context";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"



function App() {
  // const { jobs } = useContext(JobsContext);
  // const { companies } = useContext(CompaniesContext);

  return (
    <div className="m-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route />
        <Route />
      </Routes>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
