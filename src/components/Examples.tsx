import React from 'react';
import { useSnackbar } from 'react-snackbar-notifications';
import './Examples.css';

const Examples: React.FC = () => {
  const {
    showSuccess,
    showError,
    showInfo,
    show,
    promise
  } = useSnackbar();

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
          success: <b>✅ Operation completed successfully!</b>,
          error: <b>❌ Operation failed. Please try again.</b>
        }
      );
    } catch (error) {
      console.error('Promise failed:', error);
    }
  };

  const handleAllPositions = () => {
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'];
    const types = ['success', 'error', 'info', 'success', 'error', 'info'];

    positions.forEach((position, index) => {
      setTimeout(() => {
        show({
          message: `${position} position`,
          type: types[index] as any,
          position: position as any,
          animation: 'slide',
          autoHideDuration: 2500
        });
      }, index * 300);
    });
  };

  const handleAllAnimations = () => {
    const animations = [
      { name: 'slide', position: 'top-right', message: 'Slide animation' },
      { name: 'fade', position: 'top-center', message: 'Fade animation' },
      { name: 'slide-from-top', position: 'top-center', message: 'Slide from top' },
      { name: 'slide-from-bottom', position: 'bottom-center', message: 'Slide from bottom' },
      { name: 'slide-from-left', position: 'top-left', message: 'Slide from left' },
      { name: 'slide-from-right', position: 'top-right', message: 'Slide from right' }
    ];

    animations.forEach((anim, index) => {
      setTimeout(() => {
        show({
          message: anim.message,
          type: 'success',
          animation: anim.name as any,
          position: anim.position as any,
          autoHideDuration: 4000
        });
      }, index * 500);
    });
  };

  const handleCustomNotification = () => {
    show({
      message: '🎨 Beautifully customized notification!',
      type: 'info',
      position: 'top-center',
      animation: 'fade',
      theme: {
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textColor: '#ffffff',
        borderRadius: '12px',
        fontFamily: 'Inter, sans-serif'
      },
      autoHideDuration: 4000
    });
  };

  const handleReactComponent = () => {
    const CustomComponent = () => (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          🚀 Custom React Component!
        </div>
        <div style={{ fontSize: '0.9em', opacity: 0.9 }}>
          This notification contains a React component
        </div>
      </div>
    );

    show({
      message: <CustomComponent />,
      type: 'success',
      position: 'bottom-center',
      autoHideDuration: 5000
    });
  };

  const handleMultipleNotifications = () => {
    const types = ['success', 'error', 'info', 'success'];
    const messages = [
      'First notification! 🎉',
      'Second notification ⚠️',
      'Third notification ℹ️',
      'Fourth notification 🎊'
    ];

    types.forEach((type, index) => {
      setTimeout(() => {
        const method = type === 'success' ? showSuccess : type === 'error' ? showError : showInfo;
        method(messages[index]);
      }, index * 800);
    });
  };

  return (
    <div className="examples">
      <div className="examples-container">
        <div className="examples-header">
          <h1 className="examples-title">Interactive Examples</h1>
          <p className="examples-subtitle">
            Try all the different features and see how they work in real-time
          </p>
        </div>

        <div className="examples-grid">
          <div className="example-card">
            <div className="example-header">
              <h3>Basic Notifications</h3>
              <p>Try the different notification types</p>
            </div>
            <div className="example-buttons">
              <button onClick={() => showSuccess('Success notification! 🎉')}>
                ✅ Success
              </button>
              <button onClick={() => showError('Error notification! ❌')}>
                ❌ Error
              </button>
              <button onClick={() => showInfo('Info notification! ℹ️')}>
                ℹ️ Info
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>Promise Support</h3>
              <p>Automatic loading states for async operations</p>
            </div>
            <div className="example-buttons">
              <button onClick={handlePromiseDemo} className="btn-primary">
                🚀 Try Promise Demo
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>All Positions</h3>
              <p>See notifications in all 6 positions</p>
            </div>
            <div className="example-buttons">
              <button onClick={handleAllPositions}>
                📍 Show All Positions
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>All Animations</h3>
              <p>Experience all animation types</p>
            </div>
            <div className="example-buttons">
              <button onClick={handleAllAnimations}>
                🎭 Show All Animations
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>Custom Styling</h3>
              <p>Beautifully customized notification</p>
            </div>
            <div className="example-buttons">
              <button onClick={handleCustomNotification}>
                🎨 Custom Theme
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>React Components</h3>
              <p>Notifications with custom React components</p>
            </div>
            <div className="example-buttons">
              <button onClick={handleReactComponent}>
                ⚛️ React Component
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>Multiple Notifications</h3>
              <p>See how multiple notifications stack</p>
            </div>
            <div className="example-buttons">
              <button onClick={handleMultipleNotifications}>
                📚 Multiple Notifications
              </button>
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3>Advanced Options</h3>
              <p>Custom duration, themes, and more</p>
            </div>
            <div className="example-buttons">
              <button onClick={() => show({
                message: 'Custom duration (8 seconds)',
                type: 'info',
                autoHideDuration: 8000,
                position: 'bottom-right'
              })}>
                ⏱️ Long Duration
              </button>
              <button onClick={() => show({
                message: 'No close button',
                animation: "slide-from-top",
                position: 'top-center',
                type: 'success',
                showCloseIcon: false,
                autoHideDuration: 3000
              })}>
                🚫 No Close Button
              </button>
            </div>
          </div>
        </div>

        <div className="examples-footer">
          <div className="examples-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Interactive Demos</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Features Covered</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;