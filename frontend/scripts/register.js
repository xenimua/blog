document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('http://localhost:4444/auth/register', {
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
});


  