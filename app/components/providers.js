"use client";
import { useState, useEffect } from "react";
import { DarkModeContext } from "../../utils/state/context";
import BarLoader from "react-spinners/BarLoader";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children, session }) {
  const [dark, setDark] = useState("loading");

  //initial state
  useEffect(() => {
    const local = localStorage.getItem("dark");
    if (local) {
      setDark(local === "true");
      return;
    }
    const browser =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(browser);
  }, []);

  //update localStorage
  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    //add auth provider to session to share authProvider={}
    <SessionProvider session={session}>
      <DarkModeContext.Provider value={{ dark, setDark }}>
        {dark === "loading" ? (
          <div className="h-screen w-screen flex flex-col justify-center items-center text-color-txt">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 384 512"
              >
                <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
              </svg>
            </div>
            <BarLoader
              loading={true}
              width={500}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>{children}</>
        )}
      </DarkModeContext.Provider>
    </SessionProvider>
  );
}
