"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { UseClickAway } from "../../utils/hooks/useClickAway";

export default function Filter({
  regionsSelected,
  handleFilterChange,
  setRegions,
  sort,
  setSort,
}) {
  const allRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [showFilters, setShowFilters] = useState(false);

  const handleClose = () => {
    setShowFilters(false);
  };

  const ref = UseClickAway(handleClose);

  const { isAlpha, isAToZ, isSmToLg } = sort;

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 text-color-txt dark:text-dark-txt">
      {showFilters ? (
        <></>
      ) : (
        <>
          <button
            className="border dark:border-none font-medium text-sm w-32 rounded-lg bg-color-el dark:bg-dark-el py-6 sm:py-2"
            onClick={() => setSort({ ...sort, isAlpha: true, isAToZ: !isAToZ })}
          >
            <span className="mr-2">{isAToZ ? "Z" : "A"}</span>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className="ml-2">{isAToZ ? "A" : "Z"}</span>
          </button>
          <button
            className="border dark:border-none font-medium text-sm w-32 rounded-lg bg-color-el dark:bg-dark-el py-6 sm:py-2"
            onClick={() =>
              setSort({ ...sort, isAlpha: false, isSmToLg: !isSmToLg })
            }
          >
            <span className="mr-2">{isSmToLg ? "Lg" : "Sm"}</span>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className="ml-2">{isSmToLg ? "Sm" : "Lg"}</span>
          </button>
        </>
      )}
      {showFilters ? (
        <></>
      ) : regionsSelected.length > 0 ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setRegions([]);
          }}
          className="border dark:border-none font-medium text-sm w-32 rounded-lg bg-color-el dark:bg-dark-el py-6 sm:py-2"
        >
          Clear Filters
        </button>
      ) : (
        <></>
      )}
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="border dark:border-none flex justify-center w-40 bg-color-el dark:bg-dark-el rounded-lg"
      >
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="font-medium rounded text-sm p-2 text-center inline-flex items-center py-6 sm:py-2"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowFilters(!showFilters);
            }}
          >
            <span className="mr-2">Filter By Region</span>
            <FontAwesomeIcon icon={showFilters ? faCaretUp : faCaretDown} />
          </button>
          <div
            id="dropdown"
            className={`${
              showFilters ? "" : "hidden"
            } absolute rounded border z-10 bg-white  divide-gray-100 w-32 dark:bg-dark-el`}
          >
            <ul
              className="p-4 text-sm divide-y"
              aria-labelledby="dropdownDefaultButton"
            >
              {allRegions.map((region) => (
                <li
                  className="py-6 sm:py-3 grid grid-cols-2 gap-1"
                  key={region}
                >
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
