import React from 'react';
export default function About() {
  return (
    <div className="container section">
      <h1 className="section-title">About Me</h1>
      <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
        <div>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>I am an AI & Cyber Security student (B.Tech at BCE Patna) deeply passionate about the intersection of machine learning, system security, and full-stack product development.</p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Recently selected as an <strong>Official Contributor for Open Source Connect India 2026</strong>, I am comfortable across the ML pipeline, applied system security, and the product layer.</p>
          <p style={{ fontSize: '1.125rem' }}>I believe in rigorous testing and real-world performance, demonstrated by building adversarial regression suites and verifying statistical bounds.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Education</h3>
          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '1.25rem' }}>BCE Patna</h4>
            <p style={{ color: 'var(--accent)' }}>B.Tech, Computer Science & Engineering (IoT)</p>
            <p style={{ fontSize: '0.875rem' }}>CGPA: 8.15 | Aug 2025 – 2029</p>
          </div>
        </div>
      </div>
    </div>
  );
}
