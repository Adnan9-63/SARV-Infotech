import React from 'react';
import Card from '../components/Card';
import { inventions } from '../config/cardsConfig';

export default function Inventions() {
  return (
    <div className="container section">
      <h1 className="section-title">Architectural Breakthroughs</h1>
      <p style={{ marginBottom: '3rem', fontSize: '1.125rem', opacity: 0.8 }}>An analysis of his most profound inventions and scientific deductions.</p>
      <div className="grid grid-cols-3">
        {inventions.map(inv => <Card key={inv.id} item={inv} />)}
      </div>
    </div>
  );
}
