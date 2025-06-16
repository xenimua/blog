document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Авторизуйтесь для добавления поста');
      window.location.href = 'login.html';
      return;
    }
  
    const form = document.getElementById('addPostForm');
    const imageInput = document.getElementById('imageInput');
    const previewImg = document.getElementById('previewImg');
    const uploadBtn = document.getElementById('uploadBtn');
    const removeBtn = document.getElementById('removeBtn');
    let imageUrl = '';
  
    uploadBtn.addEventListener('click', () => imageInput.click());
  
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const res = await fetch('https://blog-backend-ww83.onrender.com/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData
        });
  
        const data = await res.json();
        imageUrl = data.url;
        previewImg.src = `https://blog-backend-ww83.onrender.com${imageUrl}`;
        previewImg.style.display = 'block';
        removeBtn.style.display = 'inline-block';
      } catch (err) {
        alert('Ошибка загрузки изображения');
        console.error(err);
      }
    });
  
    removeBtn.addEventListener('click', () => {
      previewImg.src = '';
      previewImg.style.display = 'none';
      imageUrl = '';
      removeBtn.style.display = 'none';
      imageInput.value = '';
    });
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const title = form.title.value;
      const tags = form.tags.value.split(',').map(tag => tag.trim());
      const text = form.text.value;
  
      try {
        const res = await fetch('https://blog-backend-ww83.onrender.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ title, text, tags, imageUrl })
        });
  
        const data = await res.json();
        window.location.href = `post.html?id=${data._id}`;
      } catch (err) {
        alert('Ошибка при публикации поста');
        console.error(err);
      }
    });
  });
  