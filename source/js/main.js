// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import 'swiper/css';

import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';

initAboutVideo();
initPriceFilter();

import { Swiper } from './vendor/swiper.js';

new Swiper('.swiper-juri', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

