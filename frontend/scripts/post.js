document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
  
    if (!postId) {
      document.getElementById('postContainer').innerHTML = 'Пост не найден';
      return;
    }
  
    try {
      const res = await fetch(`https://blog-backend-ww83.onrender.com/posts/${postId}`);
      const post = await res.json();
  
      // Заполняем содержимое
      document.getElementById('postTitle').textContent = post.title;
      document.getElementById('postDate').textContent = new Date(post.createdAt).toLocaleDateString();
      document.getElementById('postImage').src = post.imageUrl ? `http://localhost:4444${post.imageUrl}` : '';
      document.getElementById('postImage').style.display = post.imageUrl ? 'block' : 'none';
      document.getElementById('postContent').textContent = post.text;
  
      const tags = post.tags.map((tag) => `<span class="tag">#${tag}</span>`).join(' ');
      document.getElementById('postTags').innerHTML = tags;
  
      document.getElementById('postAuthor').textContent = post.user?.fullName || 'Автор';
  
      document.getElementById('postViews').textContent = post.viewsCount || 0;
      // В дальнейшем можно подключить комменты
    } catch (err) {
      document.getElementById('postContainer').innerHTML = 'Ошибка загрузки поста';
      console.error(err);
    }
  });
  