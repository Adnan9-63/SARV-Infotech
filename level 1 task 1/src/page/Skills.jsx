import React from 'react';
import Card from '../components/Card';
import { skillsCategories } from '../config/cardsConfig';

export default function Skills() {
  return (
    <div className="container section">
      <h1 className="section-title">Technical Matrix</h1>
      <div className="grid grid-cols-2">
        {skillsCategories.map(skill => <Card key={skill.id} item={skill} variant="skill" />)}
      </div>
    </div>
  );
}
