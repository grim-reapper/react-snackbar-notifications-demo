import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <div className="brand-logo">
              <span className="logo-icon">🍞</span>
              <span className="logo-text">React Snackbar</span>
            </div>
          </Link>
        </div>

        <div className="navbar-menu">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/examples"
            className={`nav-link ${location.pathname === '/examples' ? 'active' : ''}`}
          >
            Examples
          </Link>
          <Link
            to="/docs"
            className={`nav-link ${location.pathname === '/docs' ? 'active' : ''}`}
          >
            Docs
          </Link>
          <a
            href="https://github.com/grim-reapper/react-snackbar-notifications"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
          >
            GitHub
          </a>
        </div>

        <div className="navbar-actions">
          <a
            href="https://www.npmjs.com/package/react-snackbar-notifications"
            target="_blank"
            rel="noopener noreferrer"
            className="npm-button"
          >
            <span>npm install</span>
            <code>react-snackbar-notifications</code>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;