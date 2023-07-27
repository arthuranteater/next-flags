import Card from "./card";

export default function CardContainer({ selected }) {
  return (
    <ul className="flex flex-wrap gap-10 m-4 justify-center">
      {selected.map((country) => (
        <Card country={country} key={country.name.common} />
      ))}
    </ul>
  );
}
