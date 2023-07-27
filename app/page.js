import MainContainer from "./components/main-container";
import { getCountries } from "../utils/api/countries";

export default async function Homepage() {
  const countries = await getCountries();
  return <MainContainer countries={countries} />;
}
