// src/App.tsx
import React, { useState, useEffect } from 'react';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Education,
  Navigation,
  Footer,
  Resources,
  About,
} from './components';
import FadeIn from './components/FadeIn';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.scss';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(mode === 'dark' ? 'dark-mode' : 'light-mode');
  }, [mode]);

  return (
    <div className={`main-container ${mode}-mode`}>
      <ScrollToTop />
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
                <Expertise />
                <Timeline />
                <Education />
                <Project />
              </>
            }
          />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
