import { useState } from "react";

export default function Country({ country }) {
  console.log(country.languages.languages.eng);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // Step - 01
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // Step - 02
    // setVisited(visited ? false : true);

    // Step - 03
    setVisited(!visited);
  };

  return (
    <div
      className={`p-3 rounded-xl space-y-1 ${visited ? "bg-blue-300" : "bg-base-100"}`}
    >
      <img
        className="w-85 h-48 rounded-xl mb-3"
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
      <div className="flex gap-5 my-3">
        <button onClick={handleVisited} className="btn btn-primary w-28">
          {visited ? "Visited" : "Not Visited"}
        </button>
        {/* <button className="btn btn-primary w-28">Not Visited</button> */}
      </div>
    </div>
  );
}
