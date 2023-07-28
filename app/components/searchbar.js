"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "@/utils/context/dark-mode";
import { useContext } from "react";

// "dark-txt": "hsl(0, 0%, 100%)",
// "dark-input": "hsl(0, 0%, 100%)",
// "dark-bg": "hsl(207, 26%, 17%)",
// "dark-el": "hsl(209, 23%, 22%)",
// "color-txt": "hsl(200, 15%, 8%)",
// "color-input": "hsl(0, 0%, 52%)",
// "color-bg": "hsl(0, 0%, 98%)",
// "color-el": "hsl(0, 0%, 100%)",

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
