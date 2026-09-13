import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('tribute-theme') || 'dark');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('tribute-theme', theme); }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--text-color)' }}>I. <span style={{ color: 'var(--accent)' }}>NEWTON</span></NavLink>
        <div className="nav-links">
          <NavLink to="/about" className="nav-link">Biography</NavLink>
          <NavLink to="/inventions" className="nav-link">Breakthroughs</NavLink>
          <NavLink to="/qualities" className="nav-link">Virtues</NavLink>
          <NavLink to="/timeline" className="nav-link">Timeline</NavLink>
          <NavLink to="/quotes" className="nav-link">Quotes</NavLink>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }}>
            {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}
