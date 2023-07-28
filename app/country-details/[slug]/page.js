import { getCountries } from "../../../utils/api/countries";
import { getCountry } from "../../../utils/api/countries";
import CountryDetail from "../../components/country-detail";

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

export default async function DetailsPage({ params }) {
  const country = await getCountry(params.slug.replace("-", " "));

  return <CountryDetail country={country[0]} />;
}
