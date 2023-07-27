"use client";
import CardContainer from "./card-container";
import Searchbar from "./searchbar";
import { useState, useEffect } from "react";
import Filter from "./filter";

export default function MainContainer({ countries }) {
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
    }
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
    <>
      <div className="ml-10 mr-10 flex flex-wrap justify-between items-center">
        <Searchbar handleChange={handleChange} input={input} />
        <Filter
          regionsSelected={regions}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <CardContainer selected={selected} />
    </>
  );
}
