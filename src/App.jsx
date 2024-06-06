import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

import JobsPage from "./pages/JobsPage";

import JobsAI from "./pages/JobsAI";

import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="bg-gray-100 min-h-[100vh] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobsPage />} />

        <Route path="/ai" element={<JobsAI />} />
        <Route path="/ai/:jobId" element={<JobsAI />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
