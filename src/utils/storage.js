export const readJson = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
};

export const writeJson = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getTheme = () => localStorage.getItem('demandiq-theme') || 'dark';
export const setTheme = theme => { localStorage.setItem('demandiq-theme', theme); document.documentElement.dataset.theme = theme; };
