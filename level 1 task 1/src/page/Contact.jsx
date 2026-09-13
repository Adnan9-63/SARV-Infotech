import React, { useState } from 'react';
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => { navigator.clipboard.writeText('adnan568676@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.125rem' }}>I'm currently looking for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi!</p>
      <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        <button onClick={copyEmail} className="btn-primary" style={{ marginBottom: '2rem' }}>{copied ? 'Copied to clipboard! ✓' : 'Copy Email Address'}</button>
        <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>adnan568676@gmail.com</p>
      </div>
    </div>
  );
}
