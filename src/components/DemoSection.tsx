import React from 'react';
import { useSnackbar } from 'react-snackbar-notifications';
import './DemoSection.css';

const DemoSection: React.FC = () => {
  const { showSuccess, showError, showInfo, promise } = useSnackbar();

  const handlePromiseDemo = async () => {
    await promise(
      new Promise((resolve) => setTimeout(() => resolve('Success!'), 2000)),
      {
        loading: 'Loading...',
        success: 'Promise resolved successfully!',
        error: 'Promise failed'
      }
    );
  };

  return (
    <section className="demo-section">
      <div className="container">
        <h2 className="section-title">Interactive Demo</h2>
        <p className="section-description">
          Click the buttons below to see different types of notifications
        </p>

        <div className="demo-buttons">
          <button onClick={() => showSuccess('Success notification!')}>
            ✅ Success
          </button>
          <button onClick={() => showError('Error notification!')}>
            ❌ Error
          </button>
          <button onClick={() => showInfo('Info notification!')}>
            ℹ️ Info
          </button>
          <button onClick={handlePromiseDemo}>
            🚀 Promise Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;