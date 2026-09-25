import React from 'react';
import { X } from 'lucide-react';
import Modal from '../common/Modal';
export default function AdminProfile({ onClose, onLogout }) {
  return <Modal title="Admin profile" description="Manage your DemandIQ workspace account." onClose={onClose} className="admin-profile-modal"><div className="admin-profile-summary"><div className="profile-avatar">A</div><div><h3>Store Admin</h3><p>admin@demostore.com</p></div><span className="profile-role">Administrator</span></div><div className="admin-profile-details"><div><span>WORKSPACE</span><b>Demo Store</b></div><div><span>ACCESS</span><b>Full admin access</b></div><div><span>STATUS</span><b className="profile-active">Active</b></div></div><button className="logout-btn profile-logout" onClick={onLogout}>Sign out</button></Modal>;
}
