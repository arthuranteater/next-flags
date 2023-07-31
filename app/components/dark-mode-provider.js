"use client";
import { useState, useEffect, createContext } from "react";
import { DarkModeContext } from "../../utils/context/dark-mode";

export default function DarkModeProvider({ children }) {
  const [dark, setDark] = useState("loading");

  //initial state
  useEffect(() => {
    const local = localStorage.getItem("dark");
    if (local !== null && local !== undefined) {
      console.log("local", local);
      setDark(local);
      return;
    }
    console.log("undefined");
    const browser =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(browser);
  }, []);

  //update localStorage
  useEffect(() => {
    localStorage.setItem("dark", dark);
    console.log(localStorage.getItem("dark"));
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
