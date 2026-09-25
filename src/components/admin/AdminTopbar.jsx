import React from 'react';
import { Bell, ChevronRight, Menu, RefreshCw } from 'lucide-react';
export default function AdminTopbar({ active, apiStatus, refreshing, onRefresh, onMenu, onNotifications, onProfile }) {
  return <header className="topbar"><button className="menu-btn" onClick={onMenu}><Menu /></button><div className="breadcrumbs"><span>Workspace</span><ChevronRight size={15} /><b>{active}</b></div><div className="top-actions"><div className="status"><i />{apiStatus}</div><button className="round-btn" onClick={onRefresh} aria-label="Refresh data"><RefreshCw size={17} className={refreshing ? 'spin' : ''} /></button><button className="round-btn" onClick={onNotifications} aria-label="Open notifications"><Bell size={18} /><i className="notification-dot" /></button><button className="mini-avatar" onClick={onProfile} aria-label="Open admin profile">A</button></div></header>;
}
