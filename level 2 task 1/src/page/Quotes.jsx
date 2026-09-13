import React, { useState } from 'react';
import { quotesData } from '../config/cardsConfig';
import { Copy, Check } from 'lucide-react';

export default function Quotes() {
  const [copiedId, setCopiedId] = useState(null);

  const copyQuote = (id, text) => {
    navigator.clipboard.writeText(text + " - Sir Isaac Newton");
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container section">
      <h1 className="section-title">Curated Quotation Catalog</h1>
      <div className="grid grid-cols-2">
        {quotesData.map(quote => (
          <div key={quote.id} style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', position: 'relative', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{quote.title}</h3>
            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '2rem' }}>"{quote.description}"</p>
            <button 
              onClick={() => copyQuote(quote.id, quote.description)}
              style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}
            >
              {copiedId === quote.id ? <><Check size={16} color="#10b981"/> Copied!</> : <><Copy size={16}/> Copy Quote</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
