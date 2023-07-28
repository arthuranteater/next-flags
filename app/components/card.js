import Image from "next/image";
import Link from "next/link";

export default function Card({ country }) {
  return (
    <Link href={`/country-details/${country.name.common.replace(" ", "-")}`}>
      <div
        className="w-60 rounded 
      overflow-hidden 
      shadow
      dark:bg-dark-el"
      >
        <div className="flex items-start h-48 border-b">
          <div id="img-wrapper" className="h-full w-full relative ">
            <Image
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              width={0}
              height={0}
              style={{ width: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 line-clamp-2">
            {country.name.common}
          </div>
          <ul>
            <li className="font-bold text-sm">
              Population:{" "}
              <span className="font-normal">{country.population}</span>
            </li>
            <li className="font-bold text-sm">
              Region: <span className="font-normal">{country.region}</span>
            </li>
            <li className="font-bold text-sm">
              Capital: <span className="font-normal">{country.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
