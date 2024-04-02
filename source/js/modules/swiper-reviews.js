import { Swiper } from '../vendor/swiper.js';
import {
  DESKTOP_WIDTH,
  REVIEWS_SPACE_BETWEEN,
} from './constants.js';

const swiperReviews = new Swiper('.swiper-reviews', {
  spaceBetween: REVIEWS_SPACE_BETWEEN,
  navigation: {
    nextEl: '.swiper-reviews-button-next',
    prevEl: '.swiper-reviews-button-prev',
  },
});

const checkWindowWidthReviews = () => {
  switch (true) {
    case window.innerWidth < DESKTOP_WIDTH:
      swiperReviews.allowTouchMove = true;
      break;
    case window.innerWidth >= DESKTOP_WIDTH:
      swiperReviews.allowTouchMove = false;
  }
};

const initSwiperReviews = () => {
  checkWindowWidthReviews();
  window.addEventListener('resize', checkWindowWidthReviews);
};

export { initSwiperReviews };
