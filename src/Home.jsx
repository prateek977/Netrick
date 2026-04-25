import Row from "./Row";

function Home({ movies, series, query, activeTab }) {

  const allItems = [...movies, ...series];
  const randomIndex = Math.floor(Math.random() * allItems.length);
  const featured = allItems[randomIndex];

  const posterSrc =
    featured.Poster && featured.Poster !== "N/A"
      ? featured.Poster
      : "https://via.placeholder.com/1200x520?text=No+Image";

  return (
    <div>
      <div className="home-banner">
        <img src={posterSrc} alt={featured.Title} />
        <div className="home-banner-overlay" />

        <div className="home-banner-content">
          <p className="banner-platform">
            ⭐ {featured.Type === "series" ? "TV SERIES" : "MOVIE"}
          </p>
          <h1 className="banner-title">{featured.Title}</h1>
          <p className="banner-subtitle">{featured.Year}</p>
          <p className="banner-description">
            Watch the best content on Netrick. Click Play to start watching now!
          </p>
          <div className="banner-buttons">
            <a href="https://net22.cc/home" className="btn-play" style={{ textDecoration: "none" }}>
              ▶ &nbsp;Play
            </a>
            <button className="btn-info">ⓘ &nbsp;More Info</button>
          </div>
        </div>

        <div className="banner-rating">U/A 16+</div>
      </div>

      {/* Show only movies when Movies tab is active */}
      {activeTab === "movies" && (
        <Row title="🎬 Movies" items={movies} />
      )}

      {/* Show only series when TV Series tab is active */}
      {activeTab === "series" && (
        <Row title="📺 TV Series" items={series} />
      )}

      {/* Show both when Home tab is active */}
      {activeTab === "home" && (
        <div>
          {movies.length > 0 && <Row title="🎬 Popular Movies" items={movies} />}
          {series.length > 0 && <Row title="📺 Popular Series" items={series} />}
        </div>
      )}
    </div>
  );
}

export default Home;
