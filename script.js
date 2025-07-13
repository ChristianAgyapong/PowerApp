function login() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('homeScreen').classList.remove('hidden');
}

function logout() {
  document.getElementById('homeScreen').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
}
