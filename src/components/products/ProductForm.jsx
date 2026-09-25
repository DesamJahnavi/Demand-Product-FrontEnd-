import React, { useState } from 'react';
import { createProduct } from '../../api/api';
import Modal from '../common/Modal';
export default function ProductForm({ onClose, onCreated }) {
  const [error, setError] = useState(''); const [saving, setSaving] = useState(false);
  const submit = async event => { event.preventDefault(); setError(''); setSaving(true); const data = new FormData(event.currentTarget); const product = { name: data.get('name'), category: data.get('category') || 'General', price: Number(data.get('price') || 0), description: data.get('description') || '' }; try { const response = await createProduct(product); onCreated(response.data); onClose(); } catch (requestError) { console.error(requestError); setError('Unable to save the product. Please check the backend and try again.'); } finally { setSaving(false); } };
  return <Modal title="Add product" description="Create a product in your Spring Boot backend." onClose={onClose}><form onSubmit={submit}><label>Product name<input name="name" required placeholder="e.g. Wireless Earbuds" /></label><label>Category<input name="category" placeholder="e.g. Electronics" /></label><label>Price<input name="price" type="number" min="0" required placeholder="1999" /></label><label>Description<textarea name="description" placeholder="Short product description" /></label>{error && <div className="login-error" role="alert">{error}</div>}<button className="primary-btn" type="submit" disabled={saving}>{saving ? 'Saving...' : 'Create product'}</button></form></Modal>;
}
