import React from 'react';
import './Docs.css';

const Docs: React.FC = () => {
  return (
    <div className="docs">
      <div className="docs-container">
        <div className="docs-header">
          <h1 className="docs-title">Documentation</h1>
          <p className="docs-subtitle">
            Complete guide to using React Snackbar Notifications
          </p>
        </div>

        <div className="docs-content">
          <section className="docs-section">
            <h2>Installation</h2>
            <pre><code>npm install react-snackbar-notifications</code></pre>
          </section>

          <section className="docs-section">
            <h2>Quick Start</h2>
            <pre><code>{`import { SnackbarProvider, useSnackbar } from 'react-snackbar-notifications';

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
}`}</code></pre>
          </section>

          <section className="docs-section">
            <h2>API Reference</h2>

            <h3>SnackbarProvider Props</h3>
            <div className="code-block">
              <pre><code>{`interface SnackbarProviderProps {
  children: React.ReactNode;
  defaultOptions?: Partial<SnackbarOptions>;
}`}</code></pre>
            </div>

            <h3>useSnackbar Hook</h3>
            <div className="code-block">
              <pre><code>{`const {
  show,           // Show custom notification
  showSuccess,    // Show success notification
  showError,      // Show error notification
  showInfo,       // Show info notification
  promise,        // Handle async operations
  hide            // Manually hide notification
} = useSnackbar();`}</code></pre>
            </div>
          </section>

          <section className="docs-section">
            <h2>Configuration Options</h2>

            <h3>Position Options</h3>
            <ul>
              <li><code>'top-left'</code></li>
              <li><code>'top-right'</code></li>
              <li><code>'bottom-left'</code></li>
              <li><code>'bottom-right'</code></li>
              <li><code>'top-center'</code></li>
              <li><code>'bottom-center'</code></li>
            </ul>

            <h3>Animation Options</h3>
            <ul>
              <li><code>'slide'</code> - Default slide animation</li>
              <li><code>'fade'</code> - Simple fade animation</li>
              <li><code>'slide-from-top'</code></li>
              <li><code>'slide-from-bottom'</code></li>
              <li><code>'slide-from-left'</code></li>
              <li><code>'slide-from-right'</code></li>
            </ul>
          </section>

          <section className="docs-section">
            <h2>Examples</h2>

            <h3>Basic Notifications</h3>
            <pre><code>{`const { showSuccess, showError, showInfo } = useSnackbar();

showSuccess('Operation completed!');
showError('Something went wrong!');
showInfo('Here is some information');`}</code></pre>

            <h3>Promise Support</h3>
            <pre><code>{`const { promise } = useSnackbar();

await promise(
  fetch('/api/data'),
  {
    loading: 'Loading data...',
    success: 'Data loaded successfully!',
    error: 'Failed to load data'
  }
);`}</code></pre>

            <h3>Custom Styling</h3>
            <pre><code>{`show({
  message: 'Custom notification',
  position: 'top-center',
  animation: 'fade',
  theme: {
    backgroundColor: '#8e44ad',
    textColor: '#ecf0f1',
    borderRadius: '12px'
  }
});`}</code></pre>

            <h3>React Components</h3>
            <pre><code>{`const CustomMessage = () => (
  <div>
    <strong>Custom Component!</strong>
    <br />
    <small>Rendered inside notification</small>
  </div>
);

showSuccess(<CustomMessage />);`}</code></pre>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs;