"use client";
import { useState, useEffect, createContext } from "react";
import { DarkModeContext } from "../../utils/context/dark-mode";

export default function DarkModeProvider({ children }) {
  const [dark, setDark] = useState("loading");

  //initial state
  useEffect(() => {
    const localValue = localStorage.dark;
    const browserValue =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(localValue !== undefined ? localValue : browserValue);
  }, []);

  //update localStorage
  useEffect(() => {
    localStorage.dark = dark;
  }, [dark]);

  //capture browser updates
  // useEffect(() => {
  //   const handleBrowserChange = (event) => {
  //     if (event.matches) {
  //       setDark(true);
  //     }
  //     setDark(false);
  //   };
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", handleBrowserChange);
  //   return () => {
  //     window
  //       .matchMedia("(prefers-color-scheme: dark)")
  //       .removeEventListener("change", handleBrowserChange);
  //   };
  // }, []);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}
