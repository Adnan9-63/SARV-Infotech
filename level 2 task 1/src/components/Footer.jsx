import React from 'react';
export default function Footer() {
  return (
    <footer style={{ background: 'rgba(5,5,5,0.95)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '1rem' }}>Sir Isaac Newton (1642 - 1727)</p>
        <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>A historic pioneer tribute. Built to honor the father of modern computer science precursors and classical mechanics.</p>
      </div>
    </footer>
  );
}
