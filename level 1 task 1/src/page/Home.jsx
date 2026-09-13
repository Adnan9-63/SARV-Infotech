import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { featuredProjects, statsData } from '../config/cardsConfig';

export default function Home() {
  return (
    <div>
      <section className="section" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem' }}>Hi, my name is</p>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Md Adnan.</h1>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>I build intelligent & secure systems.</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.125rem' }}>First-year AI & Cyber Security student with a hands-on track record — four hackathon/CTF wins, and a rigorously tested fraud-detection system.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
            {statsData.map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>{stat.value}</h3>
                <p style={{ fontWeight: '600' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <h2 className="section-title">Featured Work</h2>
        <div className="grid grid-cols-3">
          {featuredProjects.map(proj => <Card key={proj.id} item={proj} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Explore all projects →</Link>
        </div>
      </section>
    </div>
  );
}
