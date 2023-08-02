"use client";
import CardContainer from "./card-container";
import Searchbar from "./searchbar";
import { useState, useMemo, useContext } from "react";
import Filter from "./filter";
import { DarkModeContext } from "@/utils/state/context";
import ClipLoader from "react-spinners/BarLoader";
import BounceLoader from "react-spinners/BounceLoader";

//sort helper
const sortCountries = (asc) => {
  return function ({ name: { common: nameA } }, { name: { common: nameB } }) {
    const a = nameA.toLowerCase();
    const b = nameB.toLowerCase();
    if (a < b) return asc ? -1 : 1;
    if (a > b) return asc ? 1 : -1;
    return 0;
  };
};

export default function Home({ countries }) {
  const { dark } = useContext(DarkModeContext);
  const [input, setInput] = useState("");
  const [regions, setRegions] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  //handle waterfall calc
  const countriesFiltered = useMemo(() => {
    let countriesArr = countries;
    if (regions.length > 0) {
      countriesArr = countriesArr.filter(({ region }) =>
        regions.includes(region)
      );
    }
    if (input) {
      countriesArr = countriesArr.filter(
        ({ name: { common } }) =>
          common.toLowerCase().indexOf(input.toLowerCase()) === 0
      );
    }
    return countriesArr.sort(sortCountries(isAscending));
  }, [regions, countries, isAscending, input]);

  //handle filter change
  const handleFilterChange = (event) => {
    const selectedRegion = event.target.value;

    if (regions.includes(selectedRegion)) {
      setRegions(regions.filter((region) => region !== selectedRegion));
      return;
    }
    setRegions([...regions, selectedRegion]);
  };

  //handle input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="w-screen">
      {dark === "loading" ? (
        <BounceLoader
          cssOverride={{
            color: "text-color-txt",
            top: "50%",
            right: "50%",
            position: "fixed",
          }}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className={dark ? "dark" : ""}>
          <div className="min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg pl-10 pr-10 pt-20 pb-20">
            <div className="flex flex-wrap justify-between items-center mt-6">
              <Searchbar handleChange={handleChange} input={input} />
              <Filter
                regionsSelected={regions}
                handleFilterChange={handleFilterChange}
                setRegions={setRegions}
                isAscending={isAscending}
                setIsAscending={setIsAscending}
              />
            </div>
            <CardContainer countriesFiltered={countriesFiltered} />
          </div>
        </div>
      )}
    </div>
  );
}
