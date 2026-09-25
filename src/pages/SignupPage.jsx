import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { AuthCard, Brand, Preview } from './LoginPage';
import { registerUser } from '../utils/auth';
export default function SignupPage({ onSignup, onLogin }) {
  const [error, setError] = useState('');
  const submit = event => { event.preventDefault(); const form = event.currentTarget; if (form.elements.password.value !== form.elements.confirmPassword.value) return setError('Passwords do not match.'); if (!registerUser(form.elements.name.value, form.elements.email.value, form.elements.password.value)) return setError('An account with this email already exists.'); onSignup(form.elements.email.value, form.elements.password.value); };
  return <main className="login-page"><Brand /><AuthCard eyebrow="JOIN THE WORKSPACE" title="Build a clearer view of demand." description="Create your User account and start exploring customer demand signals."><form onSubmit={submit}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" required placeholder="you@demostore.com" /></label><label>Password<input name="password" type="password" required placeholder="Enter your password" /></label><label>Confirm password<input name="confirmPassword" type="password" required placeholder="Repeat your password" /></label>{error && <div className="login-error" role="alert">{error}</div>}<button className="primary-btn" type="submit">Create User account<ChevronRight size={16} /></button></form><button className="auth-toggle" onClick={onLogin}>Already have an account? Sign in</button></AuthCard><Preview /></main>;
}
