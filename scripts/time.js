const datetimeDisplay = document.getElementById('datetime');

const currentDateTime = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'}

  const formattedDateTime = currentDateTime.toLocaleString('ru-RU', options);

  datetimeDisplay.textContent = formattedDateTime;