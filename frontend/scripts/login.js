/* document.addEventListener('DOMContentLoaded', () => {
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
}); */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверяем, существует ли такой пользователь в localStorage
    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
      alert('Пользователь не найден');
      return;
    }

    // Проверка пароля
    if (user.password === password) {
      alert('Вход успешен');
      // Можно перенаправить на страницу личного кабинета, например:
      window.location.href = 'profile.html'; // Личный кабинет
    } else {
      alert('Неверный пароль');
    }
  });
});

  