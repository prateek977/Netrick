import React, { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState(""); 
  const [type, setType] = useState("movie");
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = search === "" ? "avengers" : search; 

    fetch(`https://www.omdbapi.com/?s=${query}&type=${type}&apikey=3a4aae06`)
      .then((res) => res.json())
      .then((result) => {
        if (result.Search) {
          setData(result.Search);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.log(err));
  }, [search, type]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie Search</h2>

      {/* {Did Searchbar into it} */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* {Created Dropdown} */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
      </select>

      {/* {Displayed in row} */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.imdbID}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img src={item.Poster} alt={item.Title} width="100%" />
            <p>
              <b>{item.Title}</b>
            </p>
            <p>{item.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
