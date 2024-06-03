import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobsPage />} />
      </Routes>

      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
