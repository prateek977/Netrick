import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

// ─────────────────────────────────────────────
// App — the brain of the whole application
// It:
//   1. Holds all state (data, loading, error, search, type)
//   2. Fetches data from the OMDB API
//   3. Passes the data down to Home as props
// ─────────────────────────────────────────────
function App() {
  // 'data' holds the array of movies/series returned by the API
  const [data, setData] = useState([]);

  // 'loading' is true while the API request is in progress
  const [loading, setLoading] = useState(false);

  // 'error' stores an error message if the API call fails
  const [error, setError] = useState("");

  // 'search' is whatever the user typed in the search box
  const [search, setSearch] = useState("");

  // 'query' is the search term that was last submitted
  // We keep it separate so the API only fires when the button is clicked
  const [query, setQuery] = useState("avengers");

  // 'type' is either "movie" or "series" (chosen from the dropdown)
  const [type, setType] = useState("movie");

  // ─────────────────────────────────────────────
  // useEffect — runs whenever 'query' or 'type' changes
  // This is where we actually talk to the API
  // ─────────────────────────────────────────────
  useEffect(() => {
    // Mark that we have started loading
    setLoading(true);
    // Clear any old errors
    setError("");

    // Build the URL using the current query and type
    const url = `https://www.omdbapi.com/?s=${query}&type=${type}&apikey=3a4aae06`;

    fetch(url)
      .then((res) => res.json())          // Convert the response to JSON
      .then((result) => {
        if (result.Search) {
          // API returned results — save them in 'data'
          setData(result.Search);
        } else {
          // API returned no results (e.g. "Movie not found!")
          setData([]);
          setError(result.Error || "No results found.");
        }
        setLoading(false);                // Done loading
      })
      .catch(() => {
        // Network error or something unexpected
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, [query, type]); // Re-run this effect only when query or type changes

  // Called when the user clicks the Search button
  function handleSearch() {
    const trimmed = search.trim();
    if (trimmed === "") return;           // Do nothing for empty input
    setQuery(trimmed);                   // Updating 'query' triggers useEffect
  }

  // Allow pressing Enter key to search too
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="app-wrapper">
      {/* Navbar — pass username as a prop (static, not from API) */}
      <Navbar username="Prateek" />

      {/* Search bar sits below the navbar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies or series..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />

        {/* Type dropdown */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="search-select"
        >
          <option value="movie">Movies</option>
          <option value="series">Series</option>
        </select>

        {/* Button click sets the query → triggers useEffect */}
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* ── Conditional rendering based on state ── */}

      {/* Show a loading message while fetching */}
      {loading && <p className="status-message">Loading...</p>}

      {/* Show an error if something went wrong */}
      {error && !loading && <p className="status-message error">{error}</p>}

      {/* Pass all the fetched data to Home so it can display it */}
      {!loading && !error && data.length > 0 && (
        <Home data={data} query={query} type={type} />
      )}

      {/* Footer */}
      <footer className="footer">© 2024 Netrick · All rights reserved</footer>
    </div>
  );
}

export default App;
