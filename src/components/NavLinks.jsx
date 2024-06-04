import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
        }
        to="/jobs"
      >
        Jobs
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : "hover:text-green-500"
        }
        to="/ai"
      >
        AI
      </NavLink>
    </>
  );
}

export default NavLinks;
