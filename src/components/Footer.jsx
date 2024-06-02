import React from "react";
import githubIco from "../images/github.svg";

export const Footer = () => {
  return (
    <div className="h-[5vh] flex flex-col md:flex-row gap-4 justify-center items-center py-3 text-slate-500">
      <p>© forSure-Hired 2024</p>
      <span className="hidden md:block">|</span>
      <p>
        By <span className="font-semibold">IronHackers</span> for{" "}
        <span className="font-semibold">IronHackers</span>!
      </p>
      <a href="https://github.com/smubarakshin/forsure-hired.git">
        <img className="hover:scale-110 " alt="github icon" src={githubIco} />
      </a>
    </div>
  );
};
