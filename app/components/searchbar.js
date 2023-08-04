"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "@/utils/state/context";
import { useContext } from "react";

export default function Searchbar({ handleChange, countryCount }) {
  const { dark } = useContext(DarkModeContext);
  return (
    <form className="flex items-center justify-center">
      <label htmlFor="default-search" className="text-sm font-medium sr-only">
        Search
      </label>
      <div
        className="flex text-color-txt 
          dark:text-dark-input
          bg-color-el
          dark:bg-dark-el
          border
          dark:border-none 
          rounded-lg
          pl-4
          min-w-[270px]
          "
      >
        <div className="text-color-txt dark:text-dark-txt flex items-center justify-center pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="ml-2">{countryCount}</span>
        </div>
        <input
          type="search"
          id="default-search"
          className={`${dark ? "dark" : ""} block
          min-w-[230px]
          p-4 pl-4 py-6
          text-sm
          dark:bg-dark-el
          focus:outline-none
          dark:appearance-none
          `}
          placeholder="Search for a country..."
          required
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
