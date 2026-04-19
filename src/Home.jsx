// Home component — the large hero banner at the top of the page
// Props:
//   movie : object — the featured movie to display in the banner
//              { title, subtitle, description, image }
function Home({ movie }) {
  return (
    <div className="home-banner">
      {/* Background poster image */}
      <img src={movie.image} alt={movie.title} />

      {/* Dark gradient overlay so text is readable */}
      <div className="home-banner-overlay" />

      {/* Text content on top of the image */}
      <div className="home-banner-content">
        {/* Small red label tag */}
        <span className="banner-tag">⭐ Featured</span>

        {/* Movie title */}
        <h1 className="banner-title">{movie.title}</h1>

        {/* Year + genre line */}
        <p className="banner-subtitle">{movie.subtitle}</p>

        {/* Short description */}
        <p className="banner-description">{movie.description}</p>

        {/* Action buttons */}
        <div className="banner-buttons">
          <button className="btn-play">▶ &nbsp;Play Now</button>
          <button className="btn-info">ⓘ &nbsp;More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
