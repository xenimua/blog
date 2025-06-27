document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const fullNameInput = document.getElementById('fullName');
    const avatarInput = document.getElementById('avatar');
    const previewAvatar = document.getElementById('previewAvatar');
  
    // Получаем пользователя из localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Вы не авторизованы');
      window.location.href = 'login.html';
      return;
    }
  
    // Отображаем данные
    fullNameInput.value = user.fullName || '';
    if (user.avatarUrl) {
      previewAvatar.src = user.avatarUrl;
    }
  
    avatarInput.addEventListener('change', () => {
      const file = avatarInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          previewAvatar.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedName = fullNameInput.value;
      const avatarFile = avatarInput.files[0];
  
      user.fullName = updatedName;
  
      if (avatarFile) {
        const reader = new FileReader();
        reader.onload = () => {
          user.avatarUrl = reader.result;
          localStorage.setItem('user', JSON.stringify(user));
          alert('Профиль обновлён');
        };
        reader.readAsDataURL(avatarFile);
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Профиль обновлён');
      }
    });
  });
  
  