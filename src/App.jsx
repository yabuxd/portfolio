import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Above-the-fold: load eagerly
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIChatButton from './components/AIChatButton';
// Below-the-fold: lazy load to reduce initial bundle
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbot = lazy(() => import('./components/Chatbot'));

function Portfolio() {
  return (
    <div className="relative min-h-screen text-graphite-100 selection:bg-gold-burned selection:text-black">
      {/* Background ambient fog */}
      <div className="fog-overlay" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}><Footer /></Suspense>
      <AIChatButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/chatbot"
          element={
            <Suspense fallback={null}>
              <Chatbot />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
