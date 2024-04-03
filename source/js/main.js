import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';
import { initSwiperJuri } from './modules/swiper-juri.js';
import { initSwiperReviews } from './modules/swiper-reviews.js';
import { initFaqList } from './modules/faq-list.js';

initAboutVideo();
initPriceFilter();
initSwiperJuri();
initSwiperReviews();
initFaqList();

// Constants
const BASE_URL = 'https://echo.htmlacademy.ru/';
const ERROR_TEXT = 'Не удалось отправить форму. Попробуйте ещё раз';
const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправка...'
};
const ErrorTexts = {
  EMPTY: 'Обязательное к заполнению поле',
  NAME: 'Только буквы и пробелы',
  PHONE: 'Не должно содержать букв'
};

const form = document.querySelector('.form');
const submitButton = form.querySelector('.form__submit');
const nameInput = form.querySelector('[name="name"]');
const nameInputError = form.querySelector('[name="name"] + span');
const phoneInput = form.querySelector('[name="phone"]');
const phoneInputError = form.querySelector('[name="phone"] + span');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const sendData = (body) =>
  fetch(`${BASE_URL}`, { method: 'POST', body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ERROR_TEXT);
    })
    .finally(unblockSubmitButton);

const checkNameValue = (nameInputValue) => /^[A-Za-zА-Яа-яЁ-ё ]+$/.test(nameInputValue);
const checkPhoneValue = (phoneInputValue) => /^[^A-Za-zА-Яа-яЁ-ё]+$/.test(phoneInputValue);

const checkField = (field, errorElement, fieldCheckResult, errorText) => {
  if (fieldCheckResult === false) {
    if (field.value.length === 0) {
      errorElement.textContent = ErrorTexts.EMPTY;
    } else {
      errorElement.textContent = errorText;
    }
    field.classList.add('input--invalid');
    errorElement.style.display = 'block';
  } else {
    field.classList.remove('input--invalid');
    errorElement.style.display = 'none';
  }
};

// Disable default form requirements
nameInput.required = false;
phoneInput.required = false;

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const checkedName = checkNameValue(nameInput.value);
  const checkedPhone = checkPhoneValue(phoneInput.value);
  checkField(nameInput, nameInputError, checkedName, ErrorTexts.NAME);
  checkField(phoneInput, phoneInputError, checkedPhone, ErrorTexts.PHONE);
  if (checkedName && checkedPhone) {
    // blockSubmitButton();
    // sendData(new FormData(evt.target));
  }
});
