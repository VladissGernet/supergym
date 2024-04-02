import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';
import { initSwiperJuri } from './modules/swiper-juri.js';

initAboutVideo();
initPriceFilter();
initSwiperJuri();

import { Swiper } from './vendor/swiper.js';

new Swiper('.swiper-reviews', {
  navigation: {
    nextEl: '.swiper-reviews-button-next',
    prevEl: '.swiper-reviews-button-prev',
  },
});
