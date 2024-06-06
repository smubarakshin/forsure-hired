import { useContext, useState, useEffect } from "react";
import { JobsContext } from "../context/Jobs.context";
import { JobCard } from "./JobCard";
import { FadeLoader } from "react-spinners";

const JobsList = ({
  selectedCompany = null,
  setSelectedJob,
  selectedJob = null,
  width = "40",
  setShowJobModal,
}) => {
  const { jobs } = useContext(JobsContext);
  const [sortedJobs, setSortedJobs] = useState([...jobs]);
  const [sorting, setSorting] = useState("");
  const [searching, setSearching] = useState("");

  //sorting function
  const sortJobs = () => {
    //Convert salary range to numbers for comparison purposes
    const parseSalary = (salaryRange) => {
      const [min, max] = salaryRange
        .replace(/\$/g, "")
        .replace(/K/g, "000")
        .split(" - ")
        .map(Number);
      return { min, max };
    };

    let sortedArray = searching
      ? jobs.filter((job) =>
          job.title.toLowerCase().includes(searching.toLowerCase())
        )
      : [...jobs];
    switch (sorting) {
      case "Newest":
        sortedArray.sort(
          (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
        );
        break;
      case "Oldest":
        sortedArray.sort(
          (a, b) => new Date(a.creationDate) - new Date(b.creationDate)
        );
        break;
      case "Payment(High-Low)":
        sortedArray.sort((a, b) => {
          const salaryA = parseSalary(a.salaryRange);
          const salaryB = parseSalary(b.salaryRange);
          return salaryB.min - salaryA.min || salaryB.max - salaryA.max;
        });
        break;
      case "Payment(Low-High)":
        sortedArray.sort((a, b) => {
          const salaryA = parseSalary(a.salaryRange);
          const salaryB = parseSalary(b.salaryRange);
          return salaryA.min - salaryB.min || salaryA.max - salaryB.max;
        });
        break;

      default:
        sortedArray = [...jobs]; // No sorting, reset to default
        break;
    }
    setSortedJobs(sortedArray);
  };

  //useEffect for sorting
  useEffect(() => {
    sortJobs();
  }, [sorting, jobs]);

  //useEffect for searching
  useEffect(() => {
    const searchedJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searching.toLowerCase())
    );
    setSortedJobs(searchedJobs);
    if (sorting) {
      sortJobs();
    }
  }, [searching]);

  return (
    <div
      className={`${
        (selectedCompany && !selectedCompany.id) ||
        (selectedJob && selectedJob.id)
          ? "hidden"
          : "flex"
      } md:flex flex-col md:w-[${width}vw] w-full gap-4`}
    >
      <div className=" inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 w-full mb-2 py-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button
          className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70"
          onClick={() => setShowJobModal(true)}
        >
          {" "}
          Add New
        </button>
      </div>

      {/* filtering & sorting  */}

      <div className="flex flex-wrap justify-between items-center px-4 gap-2">
        <div className="relative flex items-center gap-2">
          <select
            onChange={(e) => setSorting(e.target.value)}
            defaultValue={sorting}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="sorting"
            name="sorting"
          >
            <option value="">All Jobs</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Payment(High-Low)">Payment(High-Low)</option>
            <option value="Payment(Low-High)">Payment(Low-High)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <input
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
          className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 w-[180px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="flex flex-col gap-2 md:overflow-y-auto pb-2 mx-2 ">
        {selectedCompany ? (
          <>
            {sortedJobs ? (
              selectedCompany.id ? (
                sortedJobs
                  .filter((job) => job.companyId === selectedCompany.id)
                  .map((job) => <JobCard job={job} key={job.id} />)
              ) : (
                sortedJobs.map((job) => <JobCard job={job} key={job.id} />)
              )
            ) : (
              <FadeLoader />
            )}
          </>
        ) : (
          <>
            {sortedJobs ? (
              sortedJobs.map((job) => (
                <div
                  onClick={() => setSelectedJob(job)}
                  className={`cursor-pointer mr-2 mx-2 rounded-lg ${
                    selectedJob && selectedJob.id === job.id
                      ? "border-4 border-solid border-slate-300 "
                      : "border-none"
                  }`}
                  key={job.id}
                >
                  <JobCard job={job} key={job.id} />
                </div>
              ))
            ) : (
              <FadeLoader />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsList;
