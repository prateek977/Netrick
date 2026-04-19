import { createRoot } from 'react-dom/client';
import './style.css';

import Navbar from './Navbar';
import Home from './Home';
import Row from './Row';

// ─────────────────────────────────────────────
// 🎬 STATIC DATA — all movie data lives here
// ─────────────────────────────────────────────

// Featured movie shown in the hero banner
const featuredMovie = {
  title: 'Eclipse Protocol',
  subtitle: '2024 · Sci-Fi · Action',
  description:
    "In a fractured future where Earth's last cities float above a dying planet, one rogue soldier must race against time to stop a catastrophic weapon \u2014 before the world ends in silence.",
  image: '/hero.png',
};

// Movies for "Continue Watching" — include a progress value (0–100)
const continueWatchingMovies = [
  {
    id: 1,
    title: 'Dark Horizon',
    image: 'https://picsum.photos/seed/movie1/300/450',
    year: '2022',
    genre: 'Thriller',
    progress: 65,
  },
  {
    id: 2,
    title: 'Neon Requiem',
    image: 'https://picsum.photos/seed/movie2/300/450',
    year: '2023',
    genre: 'Drama',
    progress: 40,
  },
  {
    id: 3,
    title: 'Iron Pulse',
    image: 'https://picsum.photos/seed/movie3/300/450',
    year: '2021',
    genre: 'Action',
    progress: 80,
  },
  {
    id: 4,
    title: 'The Quiet Storm',
    image: 'https://picsum.photos/seed/movie4/300/450',
    year: '2023',
    genre: 'Mystery',
    progress: 20,
  },
  {
    id: 5,
    title: 'Vortex Rising',
    image: 'https://picsum.photos/seed/movie5/300/450',
    year: '2024',
    genre: 'Sci-Fi',
    progress: 55,
  },
  {
    id: 6,
    title: 'Crimson Tide',
    image: 'https://picsum.photos/seed/movie6/300/450',
    year: '2022',
    genre: 'War',
    progress: 90,
  },
];

// Movies for "Recommended" — no progress bar needed
const recommendedMovies = [
  {
    id: 7,
    title: 'Solar Drift',
    image: 'https://picsum.photos/seed/movie7/300/450',
    year: '2024',
    genre: 'Sci-Fi',
  },
  {
    id: 8,
    title: 'Ashfall',
    image: 'https://picsum.photos/seed/movie8/300/450',
    year: '2023',
    genre: 'Disaster',
  },
  {
    id: 9,
    title: 'Ghost Protocol',
    image: 'https://picsum.photos/seed/movie9/300/450',
    year: '2022',
    genre: 'Action',
  },
  {
    id: 10,
    title: 'Midnight Signal',
    image: 'https://picsum.photos/seed/movie10/300/450',
    year: '2023',
    genre: 'Thriller',
  },
  {
    id: 11,
    title: 'Parallel Earth',
    image: 'https://picsum.photos/seed/movie11/300/450',
    year: '2024',
    genre: 'Sci-Fi',
  },
  {
    id: 12,
    title: 'Blood Moon',
    image: 'https://picsum.photos/seed/movie12/300/450',
    year: '2021',
    genre: 'Horror',
  },
  {
    id: 13,
    title: 'The Last Ark',
    image: 'https://picsum.photos/seed/movie13/300/450',
    year: '2024',
    genre: 'Adventure',
  },
  {
    id: 14,
    title: 'Obsidian Gate',
    image: 'https://picsum.photos/seed/movie14/300/450',
    year: '2022',
    genre: 'Fantasy',
  },
  {
    id: 15,
    title: 'Static Reign',
    image: 'https://picsum.photos/seed/movie15/300/450',
    year: '2023',
    genre: 'Drama',
  },
];

// ─────────────────────────────────────────────
// 🏠 ROOT APP COMPONENT
// ─────────────────────────────────────────────
function App() {
  return (
    <div className="app-wrapper">
      {/* Sticky navigation bar — pass the username as a prop */}
      <Navbar username="Prateek" />

      {/* Hero banner — shows the featured movie */}
      <Home movie={featuredMovie} />

      {/* Continue Watching — horizontal scrolling row */}
      <Row
        title="Continue Watching"
        movies={continueWatchingMovies}
        layout="scroll"
      />

      {/* Recommended — grid layout */}
      <Row
        title="Recommended For You"
        movies={recommendedMovies}
        layout="grid"
      />

      {/* Footer */}
      <footer className="footer">
        © 2024 Netrick · All rights reserved
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────
// 🚀 MOUNT THE REACT APP TO THE DOM
// ─────────────────────────────────────────────
createRoot(document.getElementById('root')).render(<App />);
