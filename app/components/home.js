"use client";
import CardContainer from "./card-container";
import Searchbar from "./searchbar";
import { useState, useEffect, useContext } from "react";
import Filter from "./filter";
import { DarkModeContext } from "@/utils/state/context";
import ClipLoader from "react-spinners/BarLoader";
import BounceLoader from "react-spinners/BounceLoader";

export default function Home({ countries }) {
  const { dark } = useContext(DarkModeContext);
  const [selected, setSelected] = useState(countries);
  const [input, setInput] = useState("");
  const [regions, setRegions] = useState([]);

  const handleFilterChange = (event) => {
    const selectedRegion = event.target.value;

    if (regions.includes(selectedRegion)) {
      setRegions(regions.filter((region) => region !== selectedRegion));
      return;
    }
    setRegions([...regions, selectedRegion]);
  };

  useEffect(() => {
    if (regions.length > 0) {
      setSelected(countries.filter(({ region }) => regions.includes(region)));
      return;
    }
    setSelected(countries);
  }, [regions, countries]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    setSelected(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase().indexOf(input.toLowerCase()) === 0
      )
    );
  }, [input, countries]);

  return (
    <div>
      {dark === "loading" ? (
        <BounceLoader
          cssOverride={{
            color: "text-color-txt",
            top: "50%",
            right: "50%",
            position: "fixed",
          }}
          loading={true}
          size={300}
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
              />
            </div>
            <CardContainer selected={selected} />
          </div>
        </div>
      )}
    </div>
  );
}
