import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('app-theme', theme); }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>MD<span style={{ color: 'var(--accent)' }}>ADNAN</span></NavLink>
        <div className="nav-links">
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Contact</NavLink>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
            {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}
