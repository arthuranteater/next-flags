"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "@/utils/context/dark-mode";
import { useContext } from "react";

export default function Searchbar({ handleChange }) {
  const { dark } = useContext(DarkModeContext);
  return (
    <form className="flex items-center justify-center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only"
      >
        Search
      </label>
      <div
        className="flex  text-color-input 
          dark:text-dark-input
          dark:bg-dark-el
          border
          dark:border-none 
          rounded
          "
      >
        <div className="flex items-center justify-center pl-4 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <input
          type="search"
          id="default-search"
          className={`${dark ? "dark" : ""} block
          w-80 p-4 pl-6 
          text-sm
          dark:bg-dark-el
          rounded
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
