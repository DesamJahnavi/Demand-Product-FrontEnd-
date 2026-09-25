import React, { useEffect, useState } from 'react';
import AdminProfile from './AdminProfile';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';
import Notifications from './Notifications';
import { getTheme, setTheme } from '../../utils/storage';

export default function AdminLayout({ active, onNavigate, apiStatus, refreshing, onRefresh, onLogout, children }) {
  const [sidebar, setSidebar] = useState(false); const [profileOpen, setProfileOpen] = useState(false); const [notificationsOpen, setNotificationsOpen] = useState(false); const [settingsOpen, setSettingsOpen] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = getTheme(); }, []);
  return <div className="app-shell"><AdminSidebar active={active} open={sidebar} onClose={() => setSidebar(false)} onNavigate={page => { onNavigate(page); setSidebar(false); }} onSettings={() => setSettingsOpen(true)} onProfile={() => setProfileOpen(true)} /><main className="main"><AdminTopbar active={active} apiStatus={apiStatus} refreshing={refreshing} onRefresh={onRefresh} onMenu={() => setSidebar(true)} onNotifications={() => setNotificationsOpen(true)} onProfile={() => setProfileOpen(true)} /><section className="content">{children}</section></main>{profileOpen && <AdminProfile onClose={() => setProfileOpen(false)} onLogout={onLogout} />}{notificationsOpen && <Notifications onClose={() => setNotificationsOpen(false)} />}{settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}</div>;
}
function SettingsModal({ onClose }) {
  const [theme, setCurrentTheme] = useState(getTheme());
  const choose = value => { setCurrentTheme(value); setTheme(value); };
  return <div className="profile-overlay"><section className="settings-popup"><button className="profile-popup-close" onClick={onClose} aria-label="Close settings">×</button><span className="profile-popup-label">WORKSPACE PREFERENCES</span><h2>Settings</h2><p>Choose how DemandIQ looks on your screen.</p><div className="theme-options">{[['light', '☀', 'Light theme', 'Bright workspace surfaces'], ['dark', '☾', 'Dark theme', 'Focused low-light workspace']].map(([value, icon, label, description]) => <button key={value} className={`theme-choice ${theme === value ? 'selected' : ''}`} onClick={() => choose(value)}>{icon}<span>{label}<small>{description}</small></span></button>)}</div><button className="profile-popup-dismiss" onClick={onClose}>Done</button></section></div>;
}
