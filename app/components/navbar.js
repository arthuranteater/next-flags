"use client";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../utils/state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faUserAstronaut,
  faRightFromBracket,
  faLeftFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { UseClickAway } from "@/utils/hooks/useClickAway";

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

  const handleClose = () => {
    console.log("clicked away");
    setShowDropdown(false);
  };

  const ref = UseClickAway(handleClose);

  return (
    <nav className={`${dark ? "dark" : ""} w-full z-10 fixed top-0`}>
      <div className="gap-6 text-color-txt dark:text-dark-txt bg-color-el border-gray-200 dark:bg-dark-el flex flex-col sm:flex-row items-center justify-center sm:justify-between mx-auto p-2 sm:p-4">
        <Link href="/" className="flex items-center sm:ml-10">
          <span className="self-center text-xl font-bold whitespace-nowrap">
            {title}
          </span>
        </Link>
        <div className="flex justify-end">
          <div className="hidden sm:flex justify-end">
            <div className="flex justify-center items-center">
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
                className="flex justify-center items-center"
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
                    icon={
                      isUserLoggedIn ? faRightFromBracket : faLeftFromBracket
                    }
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
          {/* mobile nav */}
          <div
            id="login-mobile"
            className="mr-5 sm:hidden"
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-6 text-center"
            >
              <FontAwesomeIcon icon={faBars} className="mr-2" />
              Menu
            </button>
            {showDropdown && (
              <div className="absolute bg-color-el dark:bg-color-el border rounded-lg w-[100px] overflow-hidden mt-5">
                <ul
                  id="nav-dropdown"
                  className="bg-color-el dark:bg-dark-el divide-y flex flex-col justify-center items-center text-sm"
                >
                  <li>
                    <button
                      type="button"
                      className="flex items-center focus:outline-none font-medium text-sm px-2 py-6 text-center"
                      onClick={() => setDark(!dark)}
                    >
                      <FontAwesomeIcon
                        icon={dark ? faMoon : faMoonLight}
                        className="mr-2"
                      />
                      {dark ? "Light" : "Dark"}
                    </button>
                  </li>
                  <li className="flex">
                    <Link
                      href="/profile"
                      className="flex items-center dark:border-none focus:outline-none font-medium text-sm px-2 py-6 text-center"
                    >
                      <FontAwesomeIcon
                        icon={faUserAstronaut}
                        className="mr-2"
                      />
                      {username}
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={signOut}
                      className="flex items-center dark:border-none focus:outline-none font-medium text-sm px-2 py-6 text-center"
                    >
                      <FontAwesomeIcon
                        icon={
                          isUserLoggedIn
                            ? faRightFromBracket
                            : faLeftFromBracket
                        }
                        className="mr-2"
                      />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
