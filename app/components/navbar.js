"use client";
import { useContext } from "react";
import { DarkModeContext } from "../../utils/context/dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar({ title }) {
  const { dark, setDark } = useContext(DarkModeContext);
  return (
    <nav
      className={`${
        dark ? "dark" : ""
      } bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ml-10">
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black border focus:outline-none font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setDark(!dark)}
          >
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
