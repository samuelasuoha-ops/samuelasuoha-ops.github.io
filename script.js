// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with localStorage
const stored = localStorage.getItem('theme');
if (stored) document.documentElement.setAttribute('data-theme', stored);
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});