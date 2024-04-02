import { Swiper } from '../vendor/swiper.js';

const initSwiperReviews = () => {
  new Swiper('.swiper-reviews', {
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
  });
};

export { initSwiperReviews };
