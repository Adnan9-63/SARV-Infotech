import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import About from './page/About';
import Inventions from './page/Inventions';
import Qualities from './page/Qualities';
import Timeline from './page/Timeline';
import Quotes from './page/Quotes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/qualities" element={<Qualities />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
