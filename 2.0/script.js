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

// Check local storage for mode preference
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

// Open modal with terms of service
window.onload = function() {
  modal.style.display = 'block';
  termsFrame.src = 'https://raw.githubusercontent.com/Holifkly/Holifkly/main/terms.txt';
};

// Close the modal when user clicks on close button
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close the modal when user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Agree to terms and hide the modal
agreeButton.onclick = function() {
  modal.style.display = 'none';
};
