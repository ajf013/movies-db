import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import "./Header.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <span onClick={() => window.scroll(0, 0)} className="header-title">
        <span className="header-emoji">🎬</span> Movies DB <span className="header-emoji">🎥</span>
      </span>
      <div className="header-nav">
        <Link to="/" className="header-link" onClick={() => window.scroll(0, 0)}>
          Trending
        </Link>
        <Link to="/movies" className="header-link" onClick={() => window.scroll(0, 0)}>
          Movies
        </Link>
        <Link to="/series" className="header-link" onClick={() => window.scroll(0, 0)}>
          TV Series
        </Link>
      </div>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default Header;