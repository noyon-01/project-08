import { useState } from "react";
import { toast } from "react-toastify";

export default function Country({
  country,
  handleVisitedCountry,
  visitedCountry,
  setVisitedCountry,
}) {
  const [visited, setVisited] = useState(false);

  const handleAddVisited = () => {
    setVisited(true);
    handleVisitedCountry(country);
  };

  const handleRemoveVisitedCountry = () => {
    setVisited(false);
    const filterVisitedCountry = visitedCountry.filter(
      (item) => item.name.common !== country.name.common,
    );

    if (visitedCountry.length === 0) {
      toast.error(`${country.name.common} is not found!`);
      return;
    }

    setVisitedCountry(filterVisitedCountry);
    toast.success(`${country.name.common} is remove from visited`);
  };

  return (
    <div
      className={`p-3 rounded-xl space-y-1 bg-base-100 ${visited && "bg-blue-300"}`}
    >
      <img
        className="w-96 h-45 md:h-55 rounded-xl mb-3"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h1 className="text-2xl font-bold truncate">
        Name: {country.name.common}
      </h1>
      <p className="text-xl font-semibold">Area: {country.area.area}</p>
      <p className="text-xl font-semibold">
        Population: {country.population.population}
      </p>
      <p className="text-xl font-semibold">
        Continents: {country.continents.continents}
      </p>
      <div className="flex gap-2 my-3">
        <button onClick={handleAddVisited} className="btn btn-primary">
          {visited ? "Not Visited" : "Visited"}
        </button>
        <button
          onClick={handleRemoveVisitedCountry}
          className="btn btn-primary wrap"
        >
          Remove Visited Countery
        </button>
      </div>
    </div>
  );
}
