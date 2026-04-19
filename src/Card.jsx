// ─────────────────────────────────────────────
// Card — displays a single movie poster with title and metadata
// Props (all come from Row, which got them from the OMDB API):
//   title : string — movie title
//   image : string — URL to the poster image
//   year  : string — release year e.g. "2023"
//   genre : string — type label e.g. "movie" or "series"
// ─────────────────────────────────────────────
function Card({ title, image, year, genre }) {
  // If OMDB has no poster, it returns the string "N/A"
  // In that case, show a grey placeholder image instead
  const posterSrc =
    image && image !== "N/A"
      ? image
      : `https://via.placeholder.com/300x450?text=No+Poster`;

  return (
    <a href="https://net22.cc/home" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
      {/* Poster image */}
      <img src={posterSrc} alt={title} />

      {/* Hover overlay with play button */}
      <div className="card-hover-overlay">
        <div className="play-icon-circle">▶</div>
      </div>

      {/* Text info below the poster */}
      <div className="card-info">
        {/* Movie title — the {title} value came from App → Home → Row → Card */}
        <p className="card-title">{title}</p>

        {/* Year and type below the title */}
        <p className="card-meta">
          {year} · {genre === "series" ? "TV Series" : "Movie"}
        </p>

        {/*
          NOTE: We removed the progress bar here because OMDB API
          does not return a watch-progress value. Only show things
          the API actually gives us.
        */}
      </div>
    </a>
  );
}

export default Card;
