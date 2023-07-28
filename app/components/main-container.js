"use client";
import { use, useContext } from "react";
import CardContainer from "./card-container";
import Searchbar from "./searchbar";
import { useState, useEffect } from "react";
import Filter from "./filter";
import { DarkModeContext } from "@/utils/context/dark-mode";

// "dark-txt": "hsl(0, 0%, 100%)",
// "dark-input": "hsl(209, 23%, 22%)",
// "dark-bg": "hsl(207, 26%, 17%)",
// "dark-el": "hsl(209, 23%, 22%)",
// color-txt: "hsl(200, 15%, 8%)",
// color-input: "hsl(0, 0%, 52%)",
// color-bg: "hsl(0, 0%, 98%)",
// color-el: "hsl(0, 0%, 100%)",

export default function MainContainer({ countries }) {
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
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg pl-10 pr-10 pt-20">
        <div className="flex flex-wrap justify-between items-center mt-6">
          <Searchbar handleChange={handleChange} input={input} />
          <Filter
            regionsSelected={regions}
            handleFilterChange={handleFilterChange}
          />
        </div>
        <CardContainer selected={selected} />
      </div>
    </div>
  );
}
