"use client";
import { useContext } from "react";
import { DarkModeContext } from "../../utils/context/dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

// "dark-txt": "hsl(0, 0%, 100%)",
// "dark-input": "hsl(209, 23%, 22%)",
// "dark-bg": "hsl(207, 26%, 17%)",
// "dark-el": "hsl(209, 23%, 22%)",
// color-txt: "hsl(200, 15%, 8%)",
// color-input: "hsl(0, 0%, 52%)",
// color-bg: "hsl(0, 0%, 98%)",
// color-el: "hsl(0, 0%, 100%)",

export default function Navbar({ title }) {
  const { dark, setDark } = useContext(DarkModeContext);
  return (
    <nav
      className={`${
        dark ? "dark" : ""
      } overflow-hidden z-10 fixed w-full top-0`}
    >
      <div className="text-color-txt dark:text-dark-txt bg-color-el border-gray-200 dark:bg-dark-el max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ml-10">
          <span className="self-center text-xl font-bold whitespace-nowrap">
            {title}
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="border focus:outline-none font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <FontAwesomeIcon icon={faMoon} className="mr-2" />
            ) : (
              <FontAwesomeIcon icon={faMoonLight} className="mr-2" />
            )}
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
