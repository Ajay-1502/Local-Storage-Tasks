// Write your code below

function handleFormSubmit(event) {
  event.preventDefault();
  localStorage.setItem('username', event.target.username.value);
  localStorage.setItem('email', event.target.email.value);
  localStorage.setItem('phone', event.target.phone.value);
}
