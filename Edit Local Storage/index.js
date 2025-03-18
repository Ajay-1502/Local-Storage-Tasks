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

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  li.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  li.appendChild(editBtn);

  ul.appendChild(li);

  editBtn.addEventListener('click', (event) => {
    const userData = localStorage.getItem(userObject.email);

    const userObj = JSON.parse(userData);

    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    userName.value = userObj.username;
    email.value = userObj.email;
    phone.value = userObj.phone;

    deleteUser(userObject.email, li);
  });

  deleteBtn.addEventListener('click', () => deleteUser(userObject.email, li));
}

function deleteUser(email, li) {
  li.remove();
  localStorage.removeItem(email);
}
