import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const POPULAR_WORDS = [
  "action", "love", "hero", "dark", "war",
  "king", "night", "fire", "star", "mission"
];

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(() => {
    const i = Math.floor(Math.random() * POPULAR_WORDS.length);
    return POPULAR_WORDS[i];
  });

  // activeTab decides what the user is currently viewing
  // "home"   → show both movies and series
  // "movies" → show only movies
  // "series" → show only series
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    fetchData(query);
  }, [query]);

  async function fetchData(searchWord) {
    setLoading(true);
    setError("");

    const i = Math.floor(Math.random() * POPULAR_WORDS.length);
    const secondWord = POPULAR_WORDS[i];
    const KEY = "3a4aae06";

    try {
      const res1 = await fetch(`https://www.omdbapi.com/?s=${searchWord}&type=movie&apikey=${KEY}`);
      const data1 = await res1.json();

      const res2 = await fetch(`https://www.omdbapi.com/?s=${secondWord}&type=movie&apikey=${KEY}`);
      const data2 = await res2.json();

      const res3 = await fetch(`https://www.omdbapi.com/?s=${searchWord}&type=series&apikey=${KEY}`);
      const data3 = await res3.json();

      const res4 = await fetch(`https://www.omdbapi.com/?s=${secondWord}&type=series&apikey=${KEY}`);
      const data4 = await res4.json();

      const allMovies = [...(data1.Search || []), ...(data2.Search || [])];
      const allSeries = [...(data3.Search || []), ...(data4.Search || [])];

      // Remove duplicate movies
      const seenMovieIds = [];
      const uniqueMovies = [];
      for (let item of allMovies) {
        if (!seenMovieIds.includes(item.imdbID)) {
          seenMovieIds.push(item.imdbID);
          uniqueMovies.push(item);
        }
      }

      // Remove duplicate series
      const seenSeriesIds = [];
      const uniqueSeries = [];
      for (let item of allSeries) {
        if (!seenSeriesIds.includes(item.imdbID)) {
          seenSeriesIds.push(item.imdbID);
          uniqueSeries.push(item);
        }
      }

      setMovies(uniqueMovies);
      setSeries(uniqueSeries);

      if (uniqueMovies.length === 0 && uniqueSeries.length === 0) {
        setError("No results found. Try a different search!");
      }
    } catch (err) {
      setError("Something went wrong. Please check your internet.");
    }

    setLoading(false);
  }

  function handleSearch() {
    const trimmed = search.trim();
    if (trimmed === "") return;
    setQuery(trimmed);
    setActiveTab("home");
  }

  function handleGoHome() {
    const i = Math.floor(Math.random() * POPULAR_WORDS.length);
    setQuery(POPULAR_WORDS[i]);
    setSearch("");
    setActiveTab("home");
  }

  function handleMoviesTab() {
    setActiveTab("movies");
  }

  function handleSeriesTab() {
    setActiveTab("series");
  }

  return (
    <div className="app-wrapper">
      <Navbar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        onHome={handleGoHome}
        onMovies={handleMoviesTab}
        onSeries={handleSeriesTab}
        activeTab={activeTab}
      />

      {loading && <p className="status-message">Loading...</p>}
      {error && !loading && <p className="status-message error">{error}</p>}

      {!loading && !error && (movies.length > 0 || series.length > 0) && (
        <Home
          movies={movies}
          series={series}
          query={query}
          activeTab={activeTab}
        />
      )}

      <footer className="footer">© 2024 Netrick · All rights reserved</footer>
    </div>
  );
}

export default App;
