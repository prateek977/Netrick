import Card from "./Card";

function Row({ title, items }) {
  return (
    <section className="row-section">
      <h2 className="row-title">
        {title}
        <span>See all →</span>
      </h2>

      <div className="row-scroll">
        {items.map((item) => (
          <Card
            key={item.imdbID}
            title={item.Title}
            image={item.Poster}
            year={item.Year}
            genre={item.Type}
          />
        ))}
      </div>
    </section>
  );
}

export default Row;
