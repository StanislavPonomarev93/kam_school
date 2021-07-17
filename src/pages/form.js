import { nameStatus } from './addEventListeners';

const form = document.querySelector('.form');
const forma = form.querySelector('.form__form');
const formInputs = forma.querySelectorAll('.form__input');
const formButton = forma.querySelector('.form__button');

formInputs[0].addEventListener('blur', () => {
  if (formInputs[0].validity.tooShort || formInputs[0].validity.valueMissing) {
    formInputs[0].style.border = '0.26vw solid red';
  }
});

formInputs[1].addEventListener('blur', () => {
  if (formInputs[1].validity.tooShort || formInputs[0].validity.valueMissing) {
    formInputs[1].style.border = '0.26vw solid red';
  }
});

formInputs[2].addEventListener('blur', () => {
  if (formInputs[2].validity.typeMismatch || formInputs[0].validity.valueMissing) {
    formInputs[2].style.border = '0.26vw solid red';
  }
});

forma.addEventListener('input', (e) => {
  document.querySelector('.error').textContent = '';
  if (!e.target.validity.tooShort && !e.target.validity.valueMissing && e.target.name === 'name') {
    e.target.style.border = '0.26vw solid green';
  }
  if (!e.target.validity.tooShort && !e.target.validity.valueMissing && e.target.name === 'phone') {
    e.target.style.border = '0.26vw solid green';
  }
  if (!e.target.validity.typeMismatch && !e.target.validity.valueMissing && e.target.name === 'email') {
    e.target.style.border = '0.26vw solid green';
  }
  if (forma.checkValidity()) {
    formButton.removeAttribute('disabled');
  } else {
    formButton.setAttribute('disabled', true);
  }
})

forma.addEventListener('submit', (event) => {
  event.preventDefault();
  event.submitter.textContent = 'Отправка...';
  return fetch('http://84.201.152.81:3000', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: nameStatus,
      name: forma.name.value,
      email: forma.email.value,
      telephone: forma.phone.value
    })
  })
    .then(res => {
      event.submitter.textContent = 'Хочу поступить!';
      if (res.ok) {
        formInputs[0].style.border = 'none';
        formInputs[1].style.border = 'none';
        formInputs[2].style.border = 'none';
        document.querySelector('.error').textContent = '';
        forma.reset();
        return true;
      }
      return res.text().then((json) => document.querySelector('.error')
        .textContent = `Ошибка ${res.status}: ${JSON.parse(json).message}`);
    })
    .catch(err => {
      document.querySelector('.error').textContent = `${err}`;
      event.submitter.textContent = 'Хочу поступить!';
    })
});