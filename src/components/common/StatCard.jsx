import React from 'react';

export default function StatCard({ icon: Icon, title, value, change, tone }) {
  return <div className="stat-card"><div className={`icon-box ${tone}`}><Icon size={21} /></div><div className="stat-content"><span>{title}</span><strong>{value}</strong><small className={change.startsWith('+') ? 'up' : 'muted'}>{change}</small></div></div>;
}
