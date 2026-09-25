import React from 'react';

export default function Modal({ title, description, onClose, children, className = '' }) {
  return <div className="modal-backdrop" onClick={onClose}><section className={`modal ${className}`} onClick={event => event.stopPropagation()}><div className="modal-head"><div><h2>{title}</h2><p>{description}</p></div><button onClick={onClose} aria-label="Close"><span aria-hidden="true">×</span></button></div>{children}</section></div>;
}
