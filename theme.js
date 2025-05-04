// Fonction pour forcer la bonne classe au démarrage
function initTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (icon) icon.src = 'moon.png';
  } else if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (icon) icon.src = 'sun.png';
  } else {
    // Pas de thème enregistré → on utilise la préférence système
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-mode');
      if (icon) icon.src = 'moon.png';
    } else {
      body.classList.add('light-mode');
      if (icon) icon.src = 'sun.png';
    }
  }
}

// Fonction pour basculer entre les thèmes
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    if (icon) icon.src = 'sun.png';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    if (icon) icon.src = 'moon.png';
  }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', initTheme);