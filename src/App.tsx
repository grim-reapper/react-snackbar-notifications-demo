import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-notifications';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Installation from './components/Installation';
import Footer from './components/Footer';
import Docs from './components/Docs';
import Examples from './components/Examples';

function App() {
  return (
    <SnackbarProvider
      defaultOptions={{
        position: 'top-right',
        animation: 'slide',
        autoHideDuration: 4000,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Features />
                  <DemoSection />
                  <Installation />
                </>
              } />
              <Route path="/docs" element={<Docs />} />
              <Route path="/examples" element={<Examples />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
