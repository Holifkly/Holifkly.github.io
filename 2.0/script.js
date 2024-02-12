const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const modal = document.getElementById('modal');
const agreeButton = document.getElementById('agreeButton');
const closeBtn = document.getElementsByClassName('close')[0];
const termsFrame = document.getElementById('termsFrame');

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  const currentMode = body.classList.contains('dark-mode') ? 'Change it to Light Mode' : 'Change to Dark Mode';
  modeToggle.textContent = currentMode;
});

const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  body.classList.add('dark-mode');
  modeToggle.textContent = 'Change it to Light Mode';
}

modeToggle.addEventListener('click', function() {
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

window.onload = function() {
  modal.style.display = 'block';
  termsFrame.src = 'https://raw.githubusercontent.com/Holifkly/Holifkly/main/terms.txt';
};

closeBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

agreeButton.onclick = function() {
  modal.style.display = 'none';
};
