import React, { createContext, useContext, useState } from 'react';
import { getUserProfile, isValidLogin } from '../utils/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem('demandiq-authenticated') === 'true');
  const [role, setRole] = useState(() => sessionStorage.getItem('demandiq-role') || 'admin');
  const [profile, setProfile] = useState(() => { try { return JSON.parse(sessionStorage.getItem('demandiq-profile') || 'null'); } catch { return null; } });

  const login = (selectedRole, email, password) => {
    if (!isValidLogin(selectedRole, email, password)) return false;
    const nextProfile = getUserProfile(selectedRole, email);
    setRole(selectedRole); setProfile(nextProfile); setAuthenticated(true);
    sessionStorage.setItem('demandiq-authenticated', 'true'); sessionStorage.setItem('demandiq-role', selectedRole); sessionStorage.setItem('demandiq-profile', JSON.stringify(nextProfile));
    return true;
  };
  const logout = () => { setAuthenticated(false); setProfile(null); sessionStorage.clear(); };
  return <AuthContext.Provider value={{ authenticated, role, profile, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
