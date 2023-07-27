export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return await res.json();
}

export async function getCountry(name) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return await res.json();
}
