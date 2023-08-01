"use client";
import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../../utils/state/context";

export default function Footer() {
  const { dark } = useContext(DarkModeContext);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex items-center justify-center w-full h-10 text-color-txt dark:text-dark-txt bg-color-el dark:bg-dark-el">
        <p>© {new Date().getFullYear()}, HuntCodes</p>
      </div>
    </div>
  );
}
