document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
      const res = await fetch('https://blog-backend-ww83.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = 'index.html'; // редирект после логина
      } else {
        alert(data.message || 'Ошибка входа');
      }
    } catch (err) {
      alert('Ошибка соединения с сервером');
    }
  });
});

  