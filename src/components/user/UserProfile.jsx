import React from 'react';

export default function UserProfile({ profile }) { return <section className="profile-card"><div className="profile-avatar">{profile.name.charAt(0)}</div><div className="profile-details"><span>YOUR ACCOUNT</span><h2>{profile.name}</h2><p>{profile.email}</p></div><div className="account-status"><i /><b>Active</b><small>{profile.role}</small></div></section>; }
