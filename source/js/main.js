import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';

initAboutVideo();
initPriceFilter();

import { Swiper } from './vendor/swiper.js';

//CONSTANTS

const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1366;
const SlidesPerView = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 4
};

//module swiper-juri

const swiperJuri = new Swiper('.swiper-juri', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('resize', () => {
  switch (true) {
    case window.innerWidth < TABLET_WIDTH:
      swiperJuri.params.slidesPerView = SlidesPerView.MOBILE;
      break;
    case window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = SlidesPerView.TABLET;
      break;
    case window.innerWidth >= DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = SlidesPerView.DESKTOP;
  }
  swiperJuri.update();
});

