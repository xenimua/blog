const blogList = document.getElementById('blogList');
const addPostBtn = document.getElementById('addPostBtn');

const token = localStorage.getItem('token');
if (token) {
  addPostBtn.style.display = 'inline-block';
}

fetch('https://blog-backend-ww83.onrender.com/posts')
  .then((res) => res.json())
  .then((posts) => {
    blogList.innerHTML = posts
      .map((post) => {
        const img = post.imageUrl ? `https://blog-backend-ww83.onrender.com${post.imageUrl}` : 'image-1.jpg';
        return `
          <a href="post.html?id=${post._id}" class="blog-card">
            <div class="blog-card__image">
              <img src="${img}" alt="${post.title}" />
            </div>
            <div class="blog-card__content">
              <h2 class="blog-card__title">${post.title}</h2>
              <div class="blog-card__meta">
                <span>${new Date(post.createdAt).toLocaleDateString('ru-RU')}</span>
                <span>${post.viewsCount} просмотров</span>
              </div>
              <div class="blog-card__tags">
                ${post.tags.map(tag => `<span class="blog-tag">#${tag}</span>`).join(' ')}
              </div>
            </div>
          </a>
        `;
      })
      .join('');
  })
  .catch((err) => {
    blogList.innerHTML = '<p>Ошибка загрузки постов. Попробуйте позже.</p>';
    console.error(err);
  });

