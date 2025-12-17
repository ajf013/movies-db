import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import "./Header.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <span onClick={() => window.scroll(0, 0)} className="header-title">
        🎬 Movies DB 🎥
      </span>
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