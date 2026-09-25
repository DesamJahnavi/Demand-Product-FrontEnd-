import React, { useEffect, useMemo, useState } from 'react';
import { getPredictions, getProducts, getSales, getSocialData } from './api/api';
import { AuthProvider, useAuth } from './context/AuthContext';
import { fallbackProducts } from './data/mockData';
import { getStoredUsers, getUserProfile } from './utils/auth';
import AdminLayout from './components/admin/AdminLayout';
import ProductForm from './components/products/ProductForm';
import ProductProfile from './components/products/ProductProfile';
import UserDashboard from './components/user/UserDashboard';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Predictions from './pages/Predictions';
import Products from './pages/Products';
import SignupPage from './pages/SignupPage';
import SocialTrends from './pages/SocialTrends';
import UsersPage from './pages/Users';

function AppContent() {
  const { authenticated, role, profile, login, logout } = useAuth();
  const [authScreen, setAuthScreen] = useState('login');
  const [active, setActive] = useState('Dashboard');
  const [products, setProducts] = useState(fallbackProducts);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [showProduct, setShowProduct] = useState(false);
  const [apiStatus, setApiStatus] = useState('Demo mode');
  const [refreshing, setRefreshing] = useState(false);
  const [forecastReady, setForecastReady] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => { setUsers(getStoredUsers()); }, [authenticated]);
  const refreshData = () => {
    setRefreshing(true);
    Promise.allSettled([getProducts(), getSales(), getSocialData(), getPredictions()]).then(results => {
      const result = results[0];
      if (result.status === 'fulfilled' && Array.isArray(result.value.data)) {
        const backendProducts = result.value.data; const knownNames = new Set(backendProducts.map(product => (product.name || '').toLowerCase()));
        setProducts([...backendProducts, ...fallbackProducts.filter(product => !knownNames.has(product.name.toLowerCase()))]); setApiStatus('Backend connected');
      } else { setProducts(current => current.length ? current : fallbackProducts); setApiStatus('Demo mode'); }
    }).finally(() => setRefreshing(false));
  };
  useEffect(() => { if (authenticated) refreshData(); }, [authenticated]);
  const filtered = useMemo(() => products.filter(product => (product.name || '').toLowerCase().includes(search.toLowerCase())), [products, search]);
  const importProducts = event => {
    const file = event.target.files[0]; if (!file) return; const reader = new FileReader();
    reader.onload = loadEvent => { const lines = String(loadEvent.target.result).split(/\r?\n/).filter(Boolean); if (lines.length < 2) return window.alert('CSV must include a header and at least one product.');
      const headers = lines[0].split(',').map(header => header.trim().toLowerCase().replace(/[^a-z]/g, '')); const column = names => headers.findIndex(header => names.includes(header));
      const nameIndex = column(['product', 'name', 'productname']); const categoryIndex = column(['category', 'type']); const priceIndex = column(['price', 'amount']); const descriptionIndex = column(['description', 'details']);
      const imported = lines.slice(1).map(line => line.split(',').map(value => value.trim().replace(/^"|"$/g, ''))).map(values => ({ name: values[nameIndex], category: values[categoryIndex] || 'General', price: Number(values[priceIndex]) || 0, description: values[descriptionIndex] || '' })).filter(product => product.name);
      setProducts(current => [...current, ...imported]); event.target.value = ''; window.alert(`${imported.length} product${imported.length === 1 ? '' : 's'} imported successfully.`);
    }; reader.readAsText(file);
  };
  const exportProducts = () => { const rows = [['Product', 'Category', 'Price', 'Predicted Demand'], ...filtered.map((product, index) => [product.name, product.category || 'General', product.price || 0, [1150, 860, 640, 720][index % 4]])]; const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'demandiq-products.csv'; link.click(); URL.revokeObjectURL(link.href); };
  const deleteUser = email => { if (!window.confirm('Delete this user? They will no longer be able to sign in.')) return; const remaining = users.filter(user => user.email !== email); setUsers(remaining); localStorage.setItem('demandiq-users', JSON.stringify(remaining)); };
  if (!authenticated) return authScreen === 'login' ? <LoginPage onLogin={login} onSignup={() => setAuthScreen('signup')} /> : <SignupPage onSignup={(email, password) => login('user', email, password)} onLogin={() => setAuthScreen('login')} />;
  if (role === 'user') return <UserDashboard products={products} profile={profile || getUserProfile('user', 'user@demostore.com')} onLogout={logout} onSelectProduct={setSelectedProduct} />;
  const page = active === 'Dashboard' ? <Dashboard products={products} filtered={filtered} search={search} setSearch={setSearch} onAdd={() => setShowProduct(true)} onExport={exportProducts} onImport={importProducts} onNavigate={setActive} onSelectProduct={setSelectedProduct} /> : active === 'Products' ? <Products filtered={filtered} search={search} setSearch={setSearch} onAdd={() => setShowProduct(true)} onSelect={setSelectedProduct} /> : active === 'Social Trends' ? <SocialTrends /> : active === 'Predictions' ? <Predictions onGenerate={() => setForecastReady(true)} forecastReady={forecastReady} /> : active === 'Analytics' ? <Analytics /> : <UsersPage users={users} onDelete={deleteUser} />;
  return <AdminLayout active={active} onNavigate={setActive} apiStatus={apiStatus} refreshing={refreshing} onRefresh={refreshData} onLogout={logout}>{page}{showProduct && <ProductForm onClose={() => setShowProduct(false)} onCreated={product => setProducts(current => [...current, product])} />}{selectedProduct && <ProductProfile product={selectedProduct} onClose={() => setSelectedProduct(null)} />}</AdminLayout>;
}

export default function App() { return <AuthProvider><AppContent /></AuthProvider>; }
