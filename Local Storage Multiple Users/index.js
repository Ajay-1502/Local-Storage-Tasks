function handleFormSubmit(event) {
  event.preventDefault();

  const userObject = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  const objStr = JSON.stringify(userObject);
  localStorage.setItem(userObject.email, objStr);

  getUsersFromLocalStorage(userObject);
}

function getUsersFromLocalStorage(userObject) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');

  li.textContent = `${userObject.username}--${userObject.email}--${userObject.phone}`;

  ul.appendChild(li);
}
