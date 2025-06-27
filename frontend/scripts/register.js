/* document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('https://blog-backend-ww83.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = 'index.html';
      } else {
        alert(data.message || 'Ошибка регистрации');
      }
    } catch (err) {
      alert('Ошибка запроса: ' + err.message);
    }
  });
}); */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка на существование пользователя с таким email
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      alert('Пользователь с таким email уже существует');
      return;
    }

    // Сохраняем данные пользователя в localStorage
    const user = {
      fullName,
      email,
      password,
    };
    localStorage.setItem(email, JSON.stringify(user)); // Сохраняем по ключу email

    alert('Регистрация прошла успешно');
    window.location.href = 'login.html'; // Перенаправляем на страницу входа
  });
});


  