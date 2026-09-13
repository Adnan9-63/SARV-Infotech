import React from 'react';
export default function About() {
  return (
    <div className="container section">
      <h1 className="section-title">Biography: Narrative Eras</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Early Years & Prodigious Curiosity</h3>
          <p>Born prematurely on Christmas Day in 1642, Isaac Newton was not expected to survive. Raised by his grandmother after his mother remarried, he found solace in constructing mechanical models, sundials, and water clocks. Though an unexceptional farmer, his unmistakable intellectual brilliance led him to Trinity College, Cambridge.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. The Turning Point (Annus Mirabilis)</h3>
          <p>In 1665, the Great Plague forced Cambridge to close. Retreating to Woolsthorpe Manor, Newton experienced his 'Year of Wonders'. In a mere 18 months of intense solitary study, he formulated the fundamentals of calculus, his theory of optics, and the law of universal gravitation—symbolized by the famous falling apple.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Principia and the Royal Society</h3>
          <p>Persuaded and funded by Edmond Halley, Newton published the *Philosophiæ Naturalis Principia Mathematica* in 1687. It united the heavens and the earth under a single set of mathematical laws. He later became President of the Royal Society, dominating European science.</p>
        </div>
      </div>
      <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--accent-subtle)', borderRadius: '12px', border: '1px solid var(--accent)' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Student Engineer Dedication</h3>
        <p>Newton's legacy teaches modern engineers the power of first-principles thinking. By ignoring accepted dogmas and building mathematical tools from scratch to solve specific problems, he demonstrated that the most elegant solutions are often born from intense, solitary focus and uncompromising rigor.</p>
      </div>
    </div>
  );
}
