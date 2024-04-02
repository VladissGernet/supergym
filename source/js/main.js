import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';

initAboutVideo();
initPriceFilter();

import { Swiper } from './vendor/swiper.js';

const swiperJuri = new Swiper('.swiper-juri', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1366;

window.addEventListener('resize', () => {
  switch (true) {
    case window.innerWidth < TABLET_WIDTH:
      swiperJuri.params.slidesPerView = 1;
      break;
    case window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = 2;
      break;
    case window.innerWidth >= DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = 4;
  }
  swiperJuri.update();
});

