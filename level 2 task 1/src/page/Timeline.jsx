import React from 'react';
import Card from '../components/Card';
import { timelineMilestones } from '../config/cardsConfig';

export default function Timeline() {
  return (
    <div className="container section">
      <h1 className="section-title">Chronological Roadmap</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {timelineMilestones.map(mile => <Card key={mile.id} item={mile} />)}
      </div>
    </div>
  );
}
