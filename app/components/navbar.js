"use client";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../utils/state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faUserAstronaut,
  faRightFromBracket,
  faLeftFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { get } from "http";

export default function Navbar({ title }) {
  const { dark, setDark } = useContext(DarkModeContext);
  const isUserLoggedIn = true;
  const username = "Profile";
  const [providers, setProviders] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav
      className={`${
        dark ? "dark" : ""
      } overflow-hidden w-full z-10 fixed top-0`}
    >
      <div className=" text-color-txt dark:text-dark-txt bg-color-el border-gray-200 dark:bg-dark-el flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ml-10">
          <span className="self-center text-xl font-bold whitespace-nowrap">
            {title}
          </span>
        </Link>
        <div className="flex justify-end">
          <div className="flex">
            <button
              type="button"
              className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
              onClick={() => setDark(!dark)}
            >
              <FontAwesomeIcon
                icon={dark ? faMoon : faMoonLight}
                className="mr-2"
              />
              {dark ? "Light" : "Dark"}
            </button>
          </div>
          {isUserLoggedIn ? (
            <div
              id="profile-desktop"
              className="sm: flex justify-center items-center"
            >
              <Link
                href="/profile"
                className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
              >
                <FontAwesomeIcon icon={faUserAstronaut} className="mr-2" />
                {username}
              </Link>
            </div>
          ) : (
            <></>
          )}
          <div
            id="login-desktop"
            className="sm: flex justify-center items-center"
          >
            {isUserLoggedIn ? (
              <button
                onClick={signOut}
                className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
              >
                <FontAwesomeIcon
                  icon={isUserLoggedIn ? faRightFromBracket : faLeftFromBracket}
                  className="mr-2"
                />
                Logout
              </button>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider}
                      onClick={() => signIn(provider.id)}
                    >
                      Login
                    </button>
                  ))}
              </>
            )}
          </div>
          {/* login mobile */}
          <div id="login-mobile" className="flex sm: hidden">
            {isUserLoggedIn ? (
              <button
                onClick={signOut}
                className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
              >
                <FontAwesomeIcon
                  icon={isUserLoggedIn ? faRightFromBracket : faLeftFromBracket}
                  className="mr-2"
                />
                Logout
              </button>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider}
                      onClick={() => signIn(provider.id)}
                    >
                      Login
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
