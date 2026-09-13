import React from 'react';
import { Code, User, Mail } from 'lucide-react';
export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><Code /></a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><User /></a>
          <a href="mailto:adnan568676@gmail.com" style={{ color: 'var(--text-secondary)' }}><Mail /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Md Adnan. All rights reserved.</p>
      </div>
    </footer>
  );
}
