import Home from "./components/home";
import { getCountries } from "../utils/api/countries";

export default async function HomePage() {
  const countries = await getCountries();
  return <Home countries={countries} />;
}

