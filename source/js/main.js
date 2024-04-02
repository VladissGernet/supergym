import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';

initAboutVideo();
initPriceFilter();

import { Swiper } from './vendor/swiper.js';

//CONSTANTS

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

//module swiper-juri

const swiperJuri = new Swiper('.swiper-juri', {
  loop: true,
  navigation: {
    nextEl: '.swiper-juri-button-next',
    prevEl: '.swiper-juri-button-prev',
  },
  initialSlide: window.innerWidth < TABLET_WIDTH ? JuriInitialSlide.MOBILE : JuriInitialSlide.OTHER,
});

const checkWindowWidth = () => {
  switch (true) {
    case window.innerWidth < TABLET_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.MOBILE;
      break;
    case window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.TABLET;
      break;
    case window.innerWidth >= DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.DESKTOP;
  }
  swiperJuri.update();
};

checkWindowWidth();

window.addEventListener('resize', checkWindowWidth);

