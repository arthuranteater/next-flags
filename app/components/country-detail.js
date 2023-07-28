"use client";

import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "@/utils/context/dark-mode";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetail({ country }) {
  const nativeNames = Object.values(country.name.nativeName).map(
    ({ common }) => common
  );

  const currencies = Object.values(country.currencies).map(({ name }) => name);

  const languages = Object.values(country.languages);

  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="py-20 min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg flex flex-wrap w-auto gap-10 justify-center items-center">
        <Link
          href="/"
          className="flex justify-center items-center ml-10 border rounded w-[100px] h-[40px]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ml-2">Back</span>
        </Link>
        <div className="relative w-[500px] p-6">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            height={0}
            width={0}
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-6 items-center">
            {country.name.common}
          </div>
          <div className="flex flex-wrap gap-4">
            <ul>
              <li className="font-bold mb-4">
                Native Name(s):{" "}
                {nativeNames.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== nativeNames.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
              <li className="font-bold mb-4">
                Population:{" "}
                <span className="font-normal">{country.population}</span>
              </li>
              <li className="font-bold mb-4">
                Region: <span className="font-normal">{country.region}</span>
              </li>
              <li className="font-bold mb-4">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </li>
              <li className="font-bold mb-4">
                Capital: <span className="font-normal">{country.capital}</span>
              </li>
            </ul>
            <ul>
              <li className="font-bold mb-4">
                Top Level Domain:{" "}
                {country.tld.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== country.tld.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
              <li className="font-bold mb-3">
                Currencies:{" "}
                {currencies.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== currencies.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
              <li className="font-bold mb-4">
                Languages:{" "}
                {languages.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== languages.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <span className="font-bold">Border Countries: </span>
            {country.borders ? (
              country.borders.map((border) => (
                <span key={border}>
                  {border}
                  {border !== country.borders.slice(-1)[0] ? ", " : ""}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
