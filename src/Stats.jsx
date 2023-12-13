export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} heading="Words" />
      <Stat number={stats.numberOfCharacters} heading="Characters" />
      <Stat number={stats.instagram} heading="Instagram" />
      <Stat number={stats.facebook} heading="Facebook" />
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
