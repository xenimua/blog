document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.querySelector(".feedback-form");
  const commentTextarea = document.getElementById("comment");
  const commentsContainer = document.querySelector(".comments");

  // Подгружаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // Фиксированный ID статьи (в реальной системе — из URL или backend)
  const postId = "post-001";

  // Загружаем все комментарии из localStorage
  const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
  const postComments = storedComments[postId] || [];

  // Отобразить комментарии
  postComments.forEach(renderComment);

  // Скрыть форму, если пользователь не авторизован
  if (!currentUser) {
    commentForm.innerHTML = `
      <div style="margin-top: 1rem; color: #555;">
        <strong>Только зарегистрированные пользователи могут оставлять комментарии.</strong><br>
        <a href="login.html" class="button" style="margin-top: 1rem; display: inline-block;">Войти</a>
      </div>`;
    return;
  }

  // Обработка отправки комментария
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = commentTextarea.value.trim();
    if (!text) return;

    const newComment = {
      author: currentUser.fullName,
      avatar: currentUser.avatar || "https://mui.com/static/images/avatar/1.jpg",
      text,
      date: new Date().toLocaleString("ru-RU"),
    };

    // Добавить комментарий в хранилище
    const updatedComments = storedComments;
    if (!updatedComments[postId]) {
      updatedComments[postId] = [];
    }
    updatedComments[postId].push(newComment);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    // Показать комментарий
    renderComment(newComment);
    commentTextarea.value = "";
  });

  // Функция отображения одного комментария
  function renderComment(comment) {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div class="comment__avatar">
        <img src="${comment.avatar}" alt="Аватар" />
      </div>
      <div class="comment__content">
        <div class="comment__author">${comment.author}</div>
        <div class="comment__text">${comment.text}</div>
        <div class="comment__date" style="font-size: 0.8em; color: #888;">${comment.date}</div>
      </div>`;
    commentsContainer.appendChild(div);
  }

  // Скрыть форму, если пользователь не авторизован
if (!currentUser) {
  commentForm.innerHTML = `
    <div class="not-logged-in" style="text-align: center; margin-top: 2rem;">
      <p><strong>Чтобы оставить комментарий, войдите в свой аккаунт.</strong></p>
      <a href="login.html" class="button button--accent" style="margin-top: 1rem;">Войти</a>
    </div>
  `;
  commentForm.classList.remove("feedback-form"); // отключим стили формы
  return;
}
});

  