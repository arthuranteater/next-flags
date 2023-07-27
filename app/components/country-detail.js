import Image from "next/image";

export default function CountryDetail({ country }) {
  const nativeNames = Object.values(country.name.nativeName).map(
    ({ common }) => common
  );

  const currencies = Object.values(country.currencies).map(({ name }) => name);

  const languages = Object.values(country.languages);

  return (
    <div className="ml-4 flex flex-wrap w-auto gap-10 justify-center items-center">
      <div className="relative w-[350px] h-[350px]">
        <Image
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          fill={true}
          className="object-scale-down"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-6 items-center">
          {country.name.common}
        </div>
        <div className="flex flex-wrap gap-4">
          <ul>
            <li className="font-bold mb-1">
              Native Name(s):{" "}
              {nativeNames.map((name) => (
                <span className="font-normal" key={name}>
                  {name}
                  {name !== nativeNames.slice(-1)[0] ? ", " : ""}
                </span>
              ))}
            </li>
            <li className="font-bold mb-1">
              Population:{" "}
              <span className="font-normal">{country.population}</span>
            </li>
            <li className="font-bold mb-1">
              Region: <span className="font-normal">{country.region}</span>
            </li>
            <li className="font-bold mb-1">
              Sub Region:{" "}
              <span className="font-normal">{country.subregion}</span>
            </li>
            <li className="font-bold mb-1">
              Capital: <span className="font-normal">{country.capital}</span>
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-1">
              Top Level Domain:{" "}
              {country.tld.map((name) => (
                <span className="font-normal" key={name}>
                  {name}
                  {name !== country.tld.slice(-1)[0] ? ", " : ""}
                </span>
              ))}
            </li>
            <li className="font-bold mb-1">
              Currencies:{" "}
              {currencies.map((name) => (
                <span className="font-normal" key={name}>
                  {name}
                  {name !== currencies.slice(-1)[0] ? ", " : ""}
                </span>
              ))}
            </li>
            <li className="font-bold mb-1">
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
  );
}
