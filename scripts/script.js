// Получаем ссылку на кнопку Зарегистрироваться
const loginButton = document.querySelector('.login-button');
// Добавляем обработчик события на клик по кнопке
loginButton.addEventListener('click', function(event) {
  event.preventDefault(); //Предотвращаем отправку формы

  // Получаем данные из формы
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Создаем новое окно или вкладку с отображением введенных данных
  const newDataWindow = window.open('', '_blank');
  newDataWindow.document.write('<h2>Ваши данные:</h2>' +
  '<p>Имя пользователя: ' + username + '</p>' +
  '<p>Пароль: ' + password + '</p>');
})
