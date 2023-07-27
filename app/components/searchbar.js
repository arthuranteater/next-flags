"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// dark:focus:ring-blue-500
// dark:focus:border-blue-500

//      focus:ring-blue-500
//focus:border-blue-500

//focus-visible:ring-0
//focus:ring-0

export default function Searchbar({ handleChange }) {
  return (
    <form className="flex items-center justify-center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div
        className="flex border rounded 

      "
      >
        <div className="flex items-center justify-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-80 p-4 pl-6 text-sm text-gray-900 
          dark:bg-gray-700 
          dark:border-gray-600 
          dark:placeholder-gray-400 
          dark:text-white
          focus:outline-none
          "
          placeholder="Search for a country..."
          required
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
