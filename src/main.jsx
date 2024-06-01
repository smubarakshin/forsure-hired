import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import { CompaniesProvider } from "./context/Companies.context.jsx";
import { JobsProvider } from "./context/Jobs.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CompaniesProvider>
      <JobsProvider>
        <App />
      </JobsProvider>
    </CompaniesProvider>
  </BrowserRouter>
);
