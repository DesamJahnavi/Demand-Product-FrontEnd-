import { readJson, writeJson } from './storage';

export const authUsers = { admin: { email: 'admin@demostore.com', password: 'admin@123' }, user: { email: 'user@demostore.com', password: 'user@123' } };
export const defaultUsers = [
  { name: 'Aarav Mehta', email: 'aarav@demostore.com', password: 'user@123', lastActive: 'Today, 10:42 AM' },
  { name: 'Priya Sharma', email: 'priya@demostore.com', password: 'user@123', lastActive: 'Today, 9:18 AM' },
  { name: 'Rohan Kapoor', email: 'rohan@demostore.com', password: 'user@123', lastActive: 'Yesterday, 4:35 PM' },
  { name: 'Neha Iyer', email: 'neha@demostore.com', password: 'user@123', lastActive: 'Yesterday, 2:11 PM' }
];

export function getStoredUsers() {
  const stored = readJson('demandiq-users', []);
  const emails = new Set(stored.map(user => user.email));
  const users = [...defaultUsers.filter(user => !emails.has(user.email)), ...stored];
  writeJson('demandiq-users', users);
  return users;
}

export function registerUser(name, email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getStoredUsers();
  if (Object.values(authUsers).some(account => account.email === normalizedEmail) || users.some(user => user.email === normalizedEmail)) return false;
  users.push({ name: name.trim(), email: normalizedEmail, password, lastActive: 'Just now' });
  writeJson('demandiq-users', users);
  return true;
}

export function isValidLogin(role, email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const account = authUsers[role];
  const user = role === 'user' && getStoredUsers().find(item => item.email === normalizedEmail);
  return Boolean((account && account.email === normalizedEmail && account.password === password) || (user && user.password === password));
}

export function getUserProfile(role, email) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = getStoredUsers().find(item => item.email === normalizedEmail);
  return { name: user?.name || (role === 'admin' ? 'Store Admin' : 'User Account'), email: normalizedEmail, role: role === 'admin' ? 'Administrator' : 'Demand Viewer' };
}
