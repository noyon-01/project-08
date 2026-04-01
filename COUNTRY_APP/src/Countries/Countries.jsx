import { use } from "react";
import Country from "../Country/Country";

export default function Countries({ countryPromise }) {
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;

  return (
    <>
      <div className="text-center text-5xl font-bold py-5">Country App</div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </>
  );
}
