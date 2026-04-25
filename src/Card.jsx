function Card({ title, image, year, genre }) {
  const posterSrc =
    image && image !== "N/A"
      ? image
      : `https://via.placeholder.com/300x450?text=No+Poster`;

  return (
    <a href="https://net22.cc/home" className="card" style={{ textDecoration: "none", color: "inherit" }}>
      <img src={posterSrc} alt={title} />

      <div className="card-hover-overlay">
        <div className="play-icon-circle">▶</div>
      </div>

      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-meta">
          {year} · {genre === "series" ? "TV Series" : "Movie"}
        </p>
      </div>
    </a>
  );
}

export default Card;
