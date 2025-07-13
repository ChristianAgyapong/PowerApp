function login() {
  document.getElementById('loginScreen').classList.remove('active');
  document.getElementById('homeScreen').classList.add('active');
}

function logout() {
  document.getElementById('homeScreen').classList.remove('active');
  document.getElementById('loginScreen').classList.add('active');
}
