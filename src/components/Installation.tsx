import React from 'react';
import './Installation.css';

const Installation: React.FC = () => {
  return (
    <section className="installation">
      <div className="container">
        <h2 className="section-title">Get Started in Minutes</h2>

        <div className="install-steps">
          <div className="install-step">
            <div className="step-number">1</div>
            <h3>Install Package</h3>
            <pre><code>npm install react-snackbar-notifications</code></pre>
          </div>

          <div className="install-step">
            <div className="step-number">2</div>
            <h3>Wrap Your App</h3>
            <pre><code>{`import { SnackbarProvider } from 'react-snackbar-notifications';

function App() {
  return (
    <SnackbarProvider>
      <YourApp />
    </SnackbarProvider>
  );
}`}</code></pre>
          </div>

          <div className="install-step">
            <div className="step-number">3</div>
            <h3>Use in Components</h3>
            <pre><code>{`import { useSnackbar } from 'react-snackbar-notifications';

function MyComponent() {
  const { showSuccess } = useSnackbar();

  return (
    <button onClick={() => showSuccess('Hello World!')}>
      Show Notification
    </button>
  );
}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;