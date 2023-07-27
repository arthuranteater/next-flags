import Image from "next/image";
import Link from "next/link";

export default function Card({ country }) {
  return (
    <Link href={`/country-details/${country.name.common.replace(" ", "-")}`}>
      <div className="w-60 rounded overflow-hidden shadow-lg">
        <div id="img-wrapper" className="h-48 relative">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            fill={true}
            className="object-scale-down"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{country.name.common}</div>
          <ul>
            <li className="font-bold">
              Population:{" "}
              <span className="font-normal">{country.population}</span>
            </li>
            <li className="font-bold">
              Region: <span className="font-normal">{country.region}</span>
            </li>
            <li className="font-bold">
              Capital: <span className="font-normal">{country.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
