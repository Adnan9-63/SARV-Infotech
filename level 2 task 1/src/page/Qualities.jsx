import React from 'react';
import Card from '../components/Card';
import { qualities } from '../config/cardsConfig';

export default function Qualities() {
  return (
    <div className="container section">
      <h1 className="section-title">Engineering Virtues</h1>
      <p style={{ marginBottom: '3rem', fontSize: '1.125rem', opacity: 0.8 }}>Core principles from Newton's approach that modern developers should emulate.</p>
      <div className="grid grid-cols-3">
        {qualities.map(qual => <Card key={qual.id} item={qual} />)}
      </div>
    </div>
  );
}
