import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap justify-between items-center px-[5%] bg-white shadow-lg">
      <div className="flex flex-row items-center justify-between w-[100%]">
        <div className="inline-flex gap-2 items-center">
          <NavLink onClick={() => setIsOpen(false)} to="/">
            <img src={logo} alt="logo img" className="h-20" />
          </NavLink>
          <h1 className="text-3xl font-bold text-slate-700">forSure Hired</h1>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-6 text-lg text-slate-600">
          <NavLinks />
        </div>
        <button className="md:hidden">
          {isOpen ? (
            <FontAwesomeIcon
              onClick={toggleNav}
              className="text-3xl text-green-600"
              icon={faX}
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleNav}
              className="text-3xl text-slate-700"
              icon={faBars}
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex basis-full flex-col items-center gap-4 py-6 text-lg text-slate-600">
          <NavLinks setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};
