document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const message = document.getElementById('message').value;

  // Логирование отправляемых данных
  console.log({ firstName, lastName, email, phoneNumber, message });

  fetch('/submit-contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, phoneNumber, message })
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);  // Показать сообщение об успешной отправке
  })
  .catch(error => {
      alert('Error submitting form');
  });
});