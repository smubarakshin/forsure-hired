import locationIcon from "../images/location.svg";
import starIcon from "../images/star-solid.svg";

const CompanyCard = ({ company, selectedCompany }) => {
  return (
    <div
      className={`flex md:flex-wrap gap-2 p-4 rounded-lg w-[90%] m-auto shadow-md   transition-all ${
        !selectedCompany &&
        "shadow-md hover:shadow-none hover:translate-y-[2px]"
      } ${
        selectedCompany && company.id === selectedCompany.id
          ? "bg-green-200"
          : "bg-white hover:translate-y-[2px] hover:shadow-none"
      }`}
    >
      <img
        src={company.logo}
        alt="company logo"
        className="h-20 rounded-lg shadow-md"
      />
      <div className="flex flex-col  justify-center gap-1 ">
        <h1 className="text-slate-700 text-2xl font-semibold w-[85%] sm:w-full">
          {company.name}
        </h1>
        <p className="text-slate-400 inline-flex gap-2 text-sm">
          <img src={locationIcon} alt="location" />
          {company.address.street +
            ", " +
            company.address.city +
            ", " +
            company.address.state}
        </p>
        <p className="inline-flex gap-1">
          <span className="font-semibold"> Rating:</span>
          {company.rating}
          <img src={starIcon} alt="star icon" />
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
