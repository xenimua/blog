/* document.addEventListener('DOMContentLoaded', () => {
  const newsList = document.querySelector('.news__list');

  const posts = [
    {
      title: "Решительная победа прогрессивной политики",
      category: "Политика",
      imageUrl: "./images/news/2.jpg",
      likes: "6k",
      shares: "92"
    },
    {
      title: "Передовые инновации в области ИИ",
      category: "Технологии",
      imageUrl: "./images/news/3.jpg",
      likes: "10k",
      shares: "124"
    },
    {
      title: "Разновидности COVID-19",
      category: "Здоровье",
      imageUrl: "./images/news/4.jpg",
      likes: "14k",
      shares: "204"
    },
    {
      title: "Исследования в области нейронауки",
      category: "Наука",
      imageUrl: "./images/news/3.jpg",
      likes: "3.5k",
      shares: "47"
    },
    {
      title: "Будущее зеленой энергетики",
      category: "Экология",
      imageUrl: "./images/news/3.jpg",
      likes: "7.8k",
      shares: "102"
    },
    {
      title: "Как технологии меняют образование",
      category: "Образование",
      imageUrl: "./images/news/3.jpg",
      likes: "5.1k",
      shares: "89"
    }
  ];

  posts.forEach(post => {
    const li = document.createElement('li');
    li.classList.add('news__item');
    li.innerHTML = `
      <article class="news-card">
        <img class="news-card__image" src="${post.imageUrl}" alt="${post.title}" width="512" height="222" loading="lazy"/>
        <div class="news-card__body">
          <h7 class="news-card__title h7">${post.title}</h7>
          <div class="news-card__description"><p>${post.category}</p></div>
        </div>
        <div class="news-card__controls">
          <div class="news-card__actions blog-actions">
            <ul class="blog-actions__list">
              <li class="blog-actions__item">
                <button class="blog-actions__button" type="button" aria-label="Like" title="Like">
                  <span class="blog-actions__icon-wrapper">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  </span>
                  <span>${post.likes}</span>
                </button>
              </li>
              <li class="blog-actions__item">
                <button class="blog-actions__button" type="button" aria-label="Share" title="Share">
                  <span class="blog-actions__icon-wrapper">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </span>
                  <span>${post.shares}</span>
                </button>
              </li>
            </ul>
          </div>
          <a class="news-card__link button" href="/post.html">
            <span class="icon icon--yellow-arrow">Читать далее</span>
          </a>
        </div>
      </article>
    `;
    newsList.appendChild(li);
  });
}); */
