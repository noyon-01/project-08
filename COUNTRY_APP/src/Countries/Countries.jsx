import { use, useState } from "react";
import Country from "../Country/Country";
import { toast } from "react-toastify";

export default function Countries({ countryPromise }) {
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const findCountry = visitedCountry.find(
      (item) => item.name.common === country.name.common,
    );

    if (findCountry) {
      toast.error(`${country.name.common} is already visited!`);
      return;
    } else {
      setVisitedCountry([...visitedCountry, country]);
      toast.success(`${country.name.common} is visited`);
    }
  };

  return (
    <>
      <div className="text-center py-5 space-y-3">
        <h1 className="text-5xl font-bold">Country App</h1>
        <h2 className="text-2xl font-bold">
          Visited Country: {visitedCountry.length}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            visitedCountry={visitedCountry}
            setVisitedCountry={setVisitedCountry}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </>
  );
}
