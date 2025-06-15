document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const userWelcome = document.getElementById('userWelcome');
  const logoutBtn = document.getElementById('logoutBtn');

  if (token && user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';

    if (userWelcome) {
      userWelcome.textContent = `Привет, ${user.fullName}`;
      userWelcome.style.display = 'inline-block';
    }

    if (logoutBtn) {
      logoutBtn.style.display = 'inline-block';
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
      });
    }
  }
});


