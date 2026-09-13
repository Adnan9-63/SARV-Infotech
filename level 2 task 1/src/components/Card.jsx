import React from 'react';
import * as Icons from 'lucide-react';

export default function Card({ item, variant = 'project' }) {
  const { title, subtitle, category, description, tags, badge, actions, icon } = item;
  const IconComponent = Icons[icon] || Icons.Box;

  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-card)', padding: '1.5rem', border: '1px solid var(--border-color)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', backdropFilter: 'blur(5px)' }} className="card-hover">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ padding: '0.75rem', background: 'var(--accent-subtle)', color: 'var(--accent)', borderRadius: '12px' }}>
          <IconComponent size={24} />
        </div>
        {badge && (
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', background: badge.variant === 'success' ? '#10b98122' : 'var(--accent-subtle)', color: badge.variant === 'success' ? '#10b981' : 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
            {badge.label}
          </span>
        )}
      </div>
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>{title}</h3>
        {subtitle && <p style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '600' }}>{subtitle}</p>}
      </div>
      <p style={{ flex: 1, fontSize: '0.95rem' }}>{description}</p>
      {tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {tags.map(tag => <span key={tag} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{tag}</span>)}
        </div>
      )}
      {actions && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
          {actions.map(action => (
            <a key={action.label} href={action.url} className={action.type === 'primary' ? 'btn-primary' : 'btn-outline'} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>{action.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}
