import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>React Snackbar Notifications</h3>
            <p>A modern, customizable React snackbar library</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Links</h4>
              <a href="https://github.com/grim-reapper/react-snackbar-notifications" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.npmjs.com/package/react-snackbar-notifications" target="_blank" rel="noopener noreferrer">
                NPM
              </a>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <a href="/docs">Documentation</a>
              <a href="/examples">Examples</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 React Snackbar Notifications. MIT License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;