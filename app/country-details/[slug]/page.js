import { getCountries } from "../../../utils/api/countries";
import { getCountry } from "../../../utils/api/countries";
import CountryDetail from "../../components/country-detail";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  const countries = await getCountries();

  return countries.map(({ name }) => {
    return {
      params: {
        slug: name.common.toLowerCase().replace(" ", "-"),
      },
      fallback: false,
    };
  });
}

export default async function Page({ params }) {
  const country = await getCountry(params.slug.replace("-", " "));

  return (
    <div>
      <Link
        href="/"
        className="flex justify-center items-center ml-10 border rounded w-[100px] h-[40px]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="ml-2">Back</span>
      </Link>
      <CountryDetail country={country[0]} />
    </div>
  );
}
