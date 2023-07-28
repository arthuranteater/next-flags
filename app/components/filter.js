//focus:ring-blue-500 focus:border-blue-500
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Filter({ regionsSelected, handleFilterChange }) {
  const allRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="font-medium rounded text-sm px-5 py-2.5 text-center text-dark-txt inline-flex items-center dark:bg-dark-el"
        type="button"
        onClick={() => setShowFilters(!showFilters)}
      >
        Filter By Region{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          showFilters ? "" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 z-10`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 p-4"
          aria-labelledby="dropdownDefaultButton"
        >
          {allRegions.map((region) => (
            <li className="flex m-1" key={region}>
              <div className="flex flex-col w-10 justify-items-start items-start">
                <button value={region} onClick={handleFilterChange}>
                  {region}
                </button>
              </div>
              <div className="flex flex-col justify-center items-center ml-20">
                {regionsSelected.includes(region) ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
