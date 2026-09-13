import React, { useState } from 'react';
import Card from '../components/Card';
import { allProjects } from '../config/cardsConfig';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI / Backend', 'Full-Stack', 'Computer Vision', 'Machine Learning'];
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);
  return (
    <div className="container section">
      <h1 className="section-title">All Projects</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{ padding: '0.5rem 1.5rem', borderRadius: '999px', border: '1px solid var(--accent)', background: filter === cat ? 'var(--accent)' : 'transparent', color: filter === cat ? '#fff' : 'var(--accent)', cursor: 'pointer', fontWeight: 'bold' }}>{cat}</button>
        ))}
      </div>
      <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Showing {filtered.length} projects</p>
      <div className="grid grid-cols-3">
        {filtered.map(proj => <Card key={proj.id} item={proj} />)}
      </div>
    </div>
  );
}
