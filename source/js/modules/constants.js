const ABOUT_VIDEO_LINK = `
<iframe class="about__iframe" width="320" height="170" loading="lazy"
src="https://www.youtube.com/embed/9TZXsZItgdw?si=FAy52euLGMEPfMED&autoplay=1"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen></iframe>
  `;
const PRICE_CURRENCY = `
<svg class="catalog__currency" width="24" height="33"
aria-label="₽">
<use href="/__spritemap#sprite-rub"></use>
</svg>
`;
const InitialPriceValues = {
  COACH: 5000,
  DAYTIME: 1700,
  FULL_DAY: 2700
};
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1366;
const JuriSlidesPerView = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 4
};
const JuriInitialSlide = {
  MOBILE: 2,
  OTHER: 0,
};
const REVIEWS_SPACE_BETWEEN = 200;
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

export {
  ABOUT_VIDEO_LINK,
  InitialPriceValues,
  PRICE_CURRENCY,
  TABLET_WIDTH,
  DESKTOP_WIDTH,
  JuriSlidesPerView,
  JuriInitialSlide,
  REVIEWS_SPACE_BETWEEN,
  BASE_URL,
  ERROR_TEXT,
  SubmitButtonText,
  ErrorTexts,
};
