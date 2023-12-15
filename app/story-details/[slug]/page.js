import { getCountries } from "../../../utils/api/countries";
import { getCountry } from "../../../utils/api/countries";
import StoryDetail from "../../components/story-detail";
import { getBorderCountries } from "../../../utils/api/countries";

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
  let borderCountries = [];
  if (country[0].borders) {
    borderCountries = await getBorderCountries(country[0].borders.toString());
  }

  return <StoryDetail story={story} />;
}
