"use client";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../utils/state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faUserAstronaut,
  faRightFromBracket,
  faBars,
  faChartSimple,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { UseClickAway } from "@/utils/hooks/useClickAway";

export default function Navbar({ title }) {
  const { dark, setDark } = useContext(DarkModeContext);
  const { data: session } = useSession();
  // console.log("session.user", session?.user);
  const [providers, setProviders] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  const handleClose = () => {
    console.log("clicked away");
    setShowDropdown(false);
  };

  // console.log("providers", providers);

  const ref = UseClickAway(handleClose);

  return (
    <nav className={`${dark ? "dark" : ""} w-full z-10 fixed top-0`}>
      <div className="gap-6 text-color-txt dark:text-dark-txt bg-color-el border-gray-200 dark:bg-dark-el flex flex-col sm:flex-row items-center justify-center sm:justify-between mx-auto p-2 sm:p-4">
        <Link href="/" className="flex items-center sm:ml-10">
          <FontAwesomeIcon icon={faFlag} className="mr-2" />
          <span className="self-center text-xl font-bold whitespace-nowrap">
            {title}
          </span>
        </Link>
        <div className="flex justify-end">
          <div className="hidden sm:flex justify-end">
            <div className="flex justify-center items-center">
              <Link
                href="/about"
                className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
              >
                <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
                About the Project
              </Link>
            </div>
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
            {session?.user ? (
              <div
                id="profile-desktop"
                className="flex justify-center items-center"
              >
                <Link
                  href="/profile"
                  className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
                >
                  <FontAwesomeIcon icon={faUserAstronaut} className="mr-2" />
                  {session.user.name}
                </Link>
              </div>
            ) : (
              <></>
            )}
            <div
              id="login-desktop"
              className="sm: flex justify-center items-center"
            >
              {session?.user ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                  Logout
                </button>
              ) : (
                <>
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <button
                        type="button"
                        key={provider}
                        className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
                        onClick={() => signIn(provider.id)}
                      >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
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
                          session?.user ? faRightFromBracket : faLeftFromBracket
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
