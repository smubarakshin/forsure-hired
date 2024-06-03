import React from "react";
import githubIco from "../images/github.svg";

export const Footer = () => {
  return (
    <div className="md:h-[5vh] flex flex-col md:flex-row md:gap-4 justify-center items-center py-3 text-slate-500 bg-white">
      <p>© forSure-Hired 2024</p>
      <span className="hidden md:block">|</span>
      <p>
        By{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
          IronHackers
        </span>{" "}
        for{" "}
        <span className="font-semibold bg-gradient-to-l from-blue-600 to-red-600 bg-clip-text text-transparent">
          IronHackers
        </span>
        !
      </p>
      <a
        href="https://github.com/smubarakshin/forsure-hired.git"
        target="_blank"
      >
        <img className="hover:scale-110" alt="github icon" src={githubIco} />
      </a>
    </div>
  );
};
