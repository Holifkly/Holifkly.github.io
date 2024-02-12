const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  const currentMode = body.classList.contains('dark-mode') ? 'Change it to Light Mode' : 'Change to Dark Mode';
  modeToggle.textContent = currentMode;
});

// Check local storage for mode preference (this was kinda hard)
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  body.classList.add('dark-mode');
  modeToggle.textContent = 'Change it to Light Mode';
}

// Save mode preference to local storage
modeToggle.addEventListener('click', function() {
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});
