import Card from "./card";

export default function CardContainer({ selected }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-10 justify-center">
      {selected.map((country) => (
        <Card country={country} key={country.name.common} />
      ))}
    </ul>
  );
}
