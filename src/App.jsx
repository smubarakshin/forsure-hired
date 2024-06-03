import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import JobsAI from "./pages/JobsAI";

function App() {
  return (
    <div className="bg-gray-100 min-h-[100vh] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/ai" element={<JobsAI />} />
      </Routes>

      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
