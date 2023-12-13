export default function Stats({
  numberOfCharacters,
  numberOfWords,
  instagram,
  facebook,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} heading="Words" />
      <Stat number={numberOfCharacters} heading="Characters" />
      <Stat number={instagram - numberOfCharacters} heading="Instagram" />
      <Stat number={facebook - numberOfCharacters} heading="Facebook" />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
