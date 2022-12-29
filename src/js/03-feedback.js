import throttle from 'lodash.throttle';

const KEY_STOR = 'feedback-form-state';
const form = document.querySelector('form');

form.addEventListener('submit', submitForm);
form.addEventListener('input', throttle(saveInputForm, 500));

updateForm();

function submitForm(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(KEY_STOR)));

  evt.currentTarget.reset();
  localStorage.removeItem(KEY_STOR);
}

function saveInputForm(evt) {
  const name = evt.target.name;
  const value = evt.target.value;

  let localData = localStorage.getItem(KEY_STOR);
  localData = localData ? JSON.parse(localData) : {};
  localData[name] = value;

  localStorage.setItem(KEY_STOR, JSON.stringify(localData));
}

function updateForm() {
  const userData = JSON.parse(localStorage.getItem(KEY_STOR));

  if (userData) {
    Object.entries(userData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

222;
222;
