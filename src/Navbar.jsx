function Navbar({ search, setSearch, onSearch, onHome, onMovies, onSeries, activeTab }) {

  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onHome} style={{ cursor: "pointer" }}>
        NETRICK
      </div>

      <div className="navbar-links">
        <span
          className={`nav-link ${activeTab === "home" ? "active" : ""}`}
          onClick={onHome}
          style={{ cursor: "pointer" }}
        >
          Home
        </span>

        <span
          className={`nav-link ${activeTab === "series" ? "active" : ""}`}
          onClick={onSeries}
          style={{ cursor: "pointer" }}
        >
          TV Series
        </span>

        <span
          className={`nav-link ${activeTab === "movies" ? "active" : ""}`}
          onClick={onMovies}
          style={{ cursor: "pointer" }}
        >
          Movies
        </span>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          className="nav-search-input"
          placeholder="Search movies or series..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="nav-search-btn" onClick={onSearch}>🔍</button>
        <div className="navbar-avatar">P</div>
      </div>
    </nav>
  );
}

export default Navbar;
