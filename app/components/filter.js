"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowDownWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { UseClickAway } from "../../utils/hooks/useClickAway";

export default function Filter({
  regionsSelected,
  handleFilterChange,
  setRegions,
  isAscending,
  setIsAscending,
}) {
  const allRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [showFilters, setShowFilters] = useState(false);

  const handleClose = () => {
    setShowFilters(false);
  };

  const ref = UseClickAway(handleClose);

  return (
    <div className="flex flex-wrap gap-6 text-color-txt dark:text-dark-txt">
      {showFilters ? (
        <></>
      ) : (
        <button
          className="font-medium text-sm w-32 rounded bg-color-el dark:bg-dark-el"
          onClick={() => setIsAscending(!isAscending)}
        >
          <span className="mr-2">Sort</span>
          <FontAwesomeIcon
            icon={isAscending ? faArrowDownWideShort : faArrowDownShortWide}
          />
        </button>
      )}
      {showFilters ? (
        <></>
      ) : regionsSelected.length > 0 ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setRegions([]);
          }}
          className="font-medium text-sm w-32 rounded bg-color-el dark:bg-dark-el"
        >
          Clear Filters
        </button>
      ) : (
        <></>
      )}
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="flex justify-center w-40 bg-color-el dark:bg-dark-el rounded"
      >
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="font-medium rounded text-sm p-2 text-center inline-flex items-center"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowFilters(!showFilters);
            }}
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
            } border-t z-10 bg-white divide-y divide-gray-100 w-32 dark:bg-dark-el`}
          >
            <ul className="p-4 text-sm" aria-labelledby="dropdownDefaultButton">
              {allRegions.map((region) => (
                <li className="mt-2 grid grid-cols-2 gap-2" key={region}>
                  <div className="flex flex-col w-10 justify-items-start items-start">
                    <button value={region} onClick={handleFilterChange}>
                      {region}
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-center ml-10">
                    {regionsSelected.includes(region) ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
