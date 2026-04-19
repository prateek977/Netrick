import Row from "./Row";

// ─────────────────────────────────────────────
// Home — receives 'data' (array of movies) from App
// It splits the array into:
//   • Featured banner → the FIRST item
//   • "Results" row   → ALL items (including the first)
// ─────────────────────────────────────────────
function Home({ data, query, type }) {
  // Take the very first movie to show in the hero banner
  const featured = data[0];

  return (
    <div>
      {/* ── Hero Banner ── */}
      {/* Shows the first movie as a full-width featured banner */}
      <div className="home-banner">
        {/* Poster image as the background */}
        <img
          src={featured.Poster !== "N/A" ? featured.Poster : "https://via.placeholder.com/1200x520?text=No+Image"}
          alt={featured.Title}
        />

        {/* Dark gradient so the text is readable on top of the image */}
        <div className="home-banner-overlay" />

        {/* Text content overlaid on the image */}
        <div className="home-banner-content">
          {/* Small red tags showing type */}
          <span className="banner-tag">⭐ Featured</span>

          {/* Movie title — comes from API data */}
          <h1 className="banner-title">{featured.Title}</h1>

          {/* Year and type from the API */}
          <p className="banner-subtitle">
            {featured.Year} · {featured.Type === "series" ? "TV Series" : "Movie"}
          </p>

          {/* Short description — OMDB search endpoint doesn't give plot,  */}
          {/* so we show the imdbID as a reference */}
          <p className="banner-description">
            IMDB ID: {featured.imdbID} &nbsp;·&nbsp; Showing results for "{query}"
          </p>

          {/* Buttons */}
          <div className="banner-buttons">
            <a href="https://net22.cc/home" className="btn-play" style={{ textDecoration: 'none' }}>▶ &nbsp;Play Now</a>
            <button className="btn-info">ⓘ &nbsp;More Info</button>
          </div>
        </div>
      </div>

      {/* ── Results Row ── */}
      {/*
        Pass the full 'data' array to Row.
        Row will loop through each item with .map() and render a Card.
      */}
      <Row
        title={`Search Results for "${query}" (${type === "series" ? "Series" : "Movies"})`}
        movies={data}
        layout="grid"
      />
    </div>
  );
}

export default Home;
