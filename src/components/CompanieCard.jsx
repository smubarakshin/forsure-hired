import locationIcon from "../images/location.svg";
import starIcon from "../images/star-solid.svg";

const CompanieCard = ({ company }) => {
  return (
    <div className="flex gap-3 p-4 rounded-lg w-[90%] shadow-md bg-white">
      <img
        src={company.logo}
        alt="company logo"
        className="h-20 rounded-lg shadow-md"
      />
      <div className="flex flex-col  justify-center gap-1 ">
        <h1 className="text-slate-700 text-3xl font-semibold">
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

export default CompanieCard;
