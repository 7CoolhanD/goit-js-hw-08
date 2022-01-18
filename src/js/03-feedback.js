import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('feedback-form input'),
  message: document.querySelector('feedback-form textarea'),
};

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

populateTextInput();

function formSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function formInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextInput() {
  const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (userData && Object.values(userData) !== []) {
    refs.form.email.value = userData.email;
    refs.form.message.value = userData.message;
    formData.email = userData.email;
    formData.message = userData.message;
  }
}
