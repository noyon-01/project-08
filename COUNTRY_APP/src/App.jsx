import { Suspense } from "react";
import Countries from "./Countries/Countries";

export default function App() {
  const countryPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
  ).then((res) => res.json());

  return (
    <div className="container mx-auto bg-base-300">
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Countries countryPromise={countryPromise} />
      </Suspense>
    </div>
  );
}
