import React from 'react';
import { useSnackbar } from 'react-snackbar-notifications';
import './Hero.css';

const Hero: React.FC = () => {
  const { showSuccess, showError, showInfo, promise } = useSnackbar();

  const handleSuccessDemo = () => {
    showSuccess('🎉 Welcome to React Snackbar!', {
      position: 'top-center',
      autoHideDuration: 3000
    });
  };

  const handleErrorDemo = () => {
    showError('❌ Something went wrong!', {
      position: 'top-center',
      autoHideDuration: 3000
    });
  };

  const handleInfoDemo = () => {
    showInfo('ℹ️ Here\'s some useful information', {
      position: 'top-center',
      autoHideDuration: 3000
    });
  };

  const handlePromiseDemo = async () => {
    try {
      await promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            Math.random() > 0.3 ? resolve('Success!') : reject(new Error('Failed'));
          }, 2000);
        }),
        {
          loading: '🔄 Processing your request...',
          success: '✅ Operation completed successfully!',
          error: '❌ Operation failed. Please try again.'
        }
      );
    } catch (error) {
      console.error('Promise failed:', error);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">✨ Lightweight & Customizable</span>
          </div>

          <h1 className="hero-title">
            Beautiful Snackbars
            <br />
            <span className="hero-gradient">Made Simple</span>
          </h1>

          <p className="hero-description">
            A modern, fully customizable React snackbar notification library with
            promise support, animations, themes, and TypeScript support.
            Perfect for modern web applications.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handlePromiseDemo}>
              🚀 Try Promise Demo
            </button>
            <button className="btn-secondary" onClick={handleSuccessDemo}>
              ✅ Success
            </button>
            <button className="btn-secondary" onClick={handleErrorDemo}>
              ❌ Error
            </button>
            <button className="btn-secondary" onClick={handleInfoDemo}>
              ℹ️ Info
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">12KB</span>
              <span className="stat-label">Bundle Size</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Positions</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Animations</span>
            </div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Dependencies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">App.tsx</span>
            </div>
            <div className="code-content">
              <pre>
{`import { SnackbarProvider, useSnackbar } from 'react-snackbar-notifications';

function App() {
  return (
    <SnackbarProvider>
      <MyComponent />
    </SnackbarProvider>
  );
}

function MyComponent() {
  const { showSuccess } = useSnackbar();

  return (
    <button onClick={() => showSuccess('Hello World!')}>
      Show Notification
    </button>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-element notification-1">✅ Success!</div>
          <div className="floating-element notification-2">❌ Error occurred</div>
          <div className="floating-element notification-3">ℹ️ Info message</div>
          <div className="floating-element notification-4">🔄 Loading...</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;