import React from "react";
import "../error.css";

function ErrorPage() {
  return (
    <main className="error relative text-slate-700 w-full flex gap-2 md:h-[88vh] md:min-h-[88vh] min-h-[82.5vh] overflow-hidden -mt-6 ">
      <div class="noise"></div>
      <div class="overlay"></div>
      <div className="md:w-[80%] md:mx-auto h-full">
        <div class="terminal">
          <h1>
            Error <span class="errorcode">404</span>
          </h1>
          <p class="output">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p class="output">
            Please try to <a href="#1">go back</a> or{" "}
            <a href="#2">return to the homepage</a>.
          </p>
          <p class="output">Good luck.</p>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
