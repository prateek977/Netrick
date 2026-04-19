// Card component — displays a single movie poster with title and metadata
// Props:
//   title    : string  — movie title
//   image    : string  — URL to the poster image
//   year     : string  — release year e.g. "2023"
//   genre    : string  — genre label e.g. "Sci-Fi"
//   progress : number  — 0–100, shows a watch progress bar (optional)
function Card({ title, image, year, genre, progress }) {
  return (
    <div className="card">
      {/* Poster image */}
      <img src={image} alt={title} />

      {/* Hover overlay with play button */}
      <div className="card-hover-overlay">
        <div className="play-icon-circle">▶</div>
      </div>

      {/* Text info below the poster */}
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-meta">
          {year} · {genre}
        </p>

        {/* Only show progress bar if a value is provided */}
        {progress !== undefined && (
          <div className="card-progress-bar">
            <div
              className="card-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
