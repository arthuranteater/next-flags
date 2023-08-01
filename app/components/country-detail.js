"use client";

import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "@/utils/state/context";
import { BreadcrumbsContext } from "@/utils/state/context";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetail({ country, borderCountries }) {
  const { breadcrumbs, setBreadcrumbs, index, setIndex } =
    useContext(BreadcrumbsContext);

  const {
    name: { nativeName, common },
    currencies,
    languages,
    flags,
    population,
    region,
    subregion,
    capital,
  } = country;

  const borderCountryNames = borderCountries.map(({ name }) => name.common);

  console.log("borderCountryNames", borderCountryNames);

  const nativeNames = Object.values(nativeName).map(({ common }) => common);

  const curriencesFiltered = Object.values(currencies).map(({ name }) => name);

  const languagesFiltered = Object.values(languages);

  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="py-20 min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg flex flex-wrap w-auto gap-10 justify-center items-center">
        {breadcrumbs.length > 1 ? (
          <Link
            href={breadcrumbs[breadcrumbs.length - (index + 1)]}
            onClick={() => setIndex(index + 1)}
            className="flex justify-center items-center ml-10 border rounded w-[100px] h-[40px]"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="ml-2">Back</span>
          </Link>
        ) : (
          <></>
        )}
        <div className="relative w-[500px] p-6">
          <Image
            src={flags.svg}
            alt={`Flag of ${common}`}
            height={0}
            width={0}
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-6 items-center">{common}</div>
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
                Population: <span className="font-normal">{population}</span>
              </li>
              <li className="font-bold mb-4">
                Region: <span className="font-normal">{region}</span>
              </li>
              <li className="font-bold mb-4">
                Sub Region: <span className="font-normal">{subregion}</span>
              </li>
              <li className="font-bold mb-4">
                Capital: <span className="font-normal">{capital}</span>
              </li>
            </ul>
            <ul>
              <li className="font-bold mb-4">
                Top Level Domain:{" "}
                {country.tld ? (
                  country.tld.map((name) => (
                    <span className="font-normal" key={name}>
                      {name}
                      {name !== country.tld.slice(-1)[0] ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <span>None</span>
                )}
              </li>
              <li className="font-bold mb-3">
                Currencies:{" "}
                {curriencesFiltered.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== curriencesFiltered.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
              <li className="font-bold mb-4">
                Languages:{" "}
                {languagesFiltered.map((name) => (
                  <span className="font-normal" key={name}>
                    {name}
                    {name !== languagesFiltered.slice(-1)[0] ? ", " : ""}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <span className="font-bold">Border Countries: </span>
            {borderCountryNames ? (
              borderCountryNames.map((name) => (
                <Link
                  key={name}
                  href={`/country-details/${name.replace(" ", "-")}`}
                >
                  {name}
                  {name !== borderCountryNames.slice(-1)[0] ? ", " : ""}
                </Link>
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
