import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar-card flex items-center h-20 justify-evenly text-center border-2 border-white">
      <div className="navbar-item w-1/5">item 1</div>
      <div className="navbar-item w-1/5">item 2</div>
      <div className="navbar-item w-3/5 flex justify-end mr-4 .text-justify">
        <input
          type="search"
          placeholder="Search jobs..."
          className="sm:text-sm border-double border-2 rounded-md border-teal-400 placeholder:italic placeholder:text-slate-50 bg-slate-400 px-4 w-320"
        />
      </div>
    </div>
  );
};
