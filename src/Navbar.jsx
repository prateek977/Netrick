import { useState, useEffect } from 'react';

// Navbar component — shown at the top of every page
// Props:
//   username: string — the logged-in user's display name
function Navbar({ username }) {
  // Track scroll position to change navbar background
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get the first letter of the username for the avatar
  const avatarLetter = username ? username[0].toUpperCase() : 'U';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Left side: Logo */}
      <div className="navbar-logo">
        <span>NET</span>RICK
      </div>

      {/* Right side: username + avatar */}
      <div className="navbar-right">
        <span className="navbar-username">{username}</span>
        <div className="navbar-avatar">{avatarLetter}</div>
      </div>
    </nav>
  );
}

export default Navbar;
