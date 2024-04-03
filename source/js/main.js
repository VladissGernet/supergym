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

const BASE_URL = 'https://echo.htmlacademy.ru/';
const ERROR_TEXT = 'Не удалось отправить форму. Попробуйте ещё раз';

const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправка...'
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
const checkField = (field, errorElement, fieldValue) => {
  if (fieldValue === false) {
    field.classList.add('input--invalid');
    errorElement.style.display = 'block';
  } else {
    field.classList.remove('input--invalid');
    errorElement.style.display = 'none';
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const checkedName = checkNameValue(nameInput.value);
  const checkedPhone = checkPhoneValue(phoneInput.value);
  checkField(nameInput, nameInputError, checkedName);
  checkField(phoneInput, phoneInputError, checkedPhone);
  if (checkedName && checkedPhone) {
    blockSubmitButton();
    sendData(new FormData(evt.target));
  }
});
