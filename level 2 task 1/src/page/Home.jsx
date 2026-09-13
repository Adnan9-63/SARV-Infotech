import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { tributePillars } from '../config/cardsConfig';

export default function Home() {
  return (
    <div>
      <section className="section" style={{ padding: '8rem 0', textAlign: 'center', background: 'linear-gradient(rgba(5,5,5,0.7), rgba(5,5,5,1))' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>Woolsthorpe, 1642 — London, 1727</p>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', color: '#fff' }}>ISAAC NEWTON</h1>
          
          <div style={{ margin: '3rem auto', width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent)', boxShadow: '0 0 20px var(--accent-subtle)' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg" 
              alt="Portrait of Sir Isaac Newton by Sir Godfrey Kneller, 1689" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>The Father of Classical Mechanics & Calculus</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.25rem', fontStyle: 'italic', opacity: 0.9 }}>
            "A farmer's son who preferred watermills and sundials to sheep, and who ended up rewriting the rules of the universe."
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/about" className="btn-primary">Explore Biography</Link>
            <Link to="/inventions" className="btn-outline">His Inventions</Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Foundational Pillars</h2>
        <div className="grid grid-cols-3">
          {tributePillars.map(pil => <Card key={pil.id} item={pil} />)}
        </div>
      </section>
    </div>
  );
}
