const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = ['Message 1', 'Message 2', 'Message 3', 'Message 4'];

button.addEventListener('click', createNotification);

function createNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerHTML = getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
