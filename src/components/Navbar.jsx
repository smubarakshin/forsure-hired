import React from "react";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <div className="h-[10vh] flex justify-between items-center px-[5%] bg-white shadow-lg">
      <div className="inline-flex gap-2 items-center">
        <img src={logo} alt="logo img" className="h-16" />
        <h1 className="hidden md:block text-xl font-bold text-slate-700">
          forSure Hired
        </h1>
      </div>
      <ul></ul>
    </div>
  );
};
