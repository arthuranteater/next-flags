"use client";
import { useState, useEffect, createContext } from "react";
import { DarkModeContext } from "../../utils/context/dark-mode";

export default function DarkModeProvider({ children }) {
  const [dark, setDark] = useState("loading");

  //initial state
  useEffect(() => {
    const local = localStorage.getItem("dark");
    if (local !== undefined) {
      console.log("local", local);
      setDark(local);
      return;
    }
    const browser =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(browser);
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
