import Card from './Card';

// Row component — shows a labelled section of movie cards
// Props:
//   title   : string  — section heading e.g. "Continue Watching"
//   movies  : array   — list of movie objects to display
//   layout  : string  — "scroll" (horizontal) or "grid"
function Row({ title, movies, layout }) {
  // Choose CSS class based on the layout prop
  const containerClass = layout === 'grid' ? 'row-grid' : 'row-scroll';

  return (
    <section className="row-section">
      {/* Section heading */}
      <h2 className="row-title">
        {title}
        <span>See all →</span>
      </h2>

      {/* Movie cards container */}
      <div className={containerClass}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.year}
            genre={movie.genre}
            progress={movie.progress}
          />
        ))}
      </div>
    </section>
  );
}

export default Row;
