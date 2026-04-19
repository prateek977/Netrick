import Card from "./Card";

// ─────────────────────────────────────────────
// Row — receives an array of movies and renders them
// Props:
//   title  : string — section heading
//   movies : array  — list of movie objects from the OMDB API
//   layout : string — "scroll" or "grid"
// ─────────────────────────────────────────────
function Row({ title, movies, layout }) {
  // Choose the CSS class based on the layout prop
  const containerClass = layout === "grid" ? "row-grid" : "row-scroll";

  return (
    <section className="row-section">
      {/* Section heading */}
      <h2 className="row-title">
        {title}
        <span>See all →</span>
      </h2>

      {/* Container — either a horizontal scroll or a grid */}
      <div className={containerClass}>
        {/*
          .map() loops through every movie object in the array.
          For each movie, we render one <Card /> component.
          We pass the movie's fields as separate props to Card.

          OMDB API gives us these fields:
            imdbID  — unique ID (use as the key so React can track items)
            Title   — movie title
            Poster  — URL to the poster image
            Year    — release year
            Type    — "movie" or "series"
        */}
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}        /* Unique key — required by React */
            title={movie.Title}       /* Pass title to Card */
            image={movie.Poster}      /* Pass poster image URL to Card */
            year={movie.Year}         /* Pass year to Card */
            genre={movie.Type}        /* OMDB doesn't give genre in search, use Type */
          />
        ))}
      </div>
    </section>
  );
}

export default Row;
