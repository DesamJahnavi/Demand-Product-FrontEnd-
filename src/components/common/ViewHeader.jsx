import React from 'react';

export default function ViewHeader({ eyebrow, title, description, action }) {
  return <div className="view-header"><div><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}
