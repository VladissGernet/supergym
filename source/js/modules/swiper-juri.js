
import { Swiper } from '../vendor/swiper.js';
import {
  TABLET_WIDTH,
  DESKTOP_WIDTH,
  JuriSlidesPerView,
  JuriInitialSlide,
} from './constants.js';

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

const initSwiperJuri = () => {
  checkWindowWidth();
  window.addEventListener('resize', checkWindowWidth);
};

export { initSwiperJuri };

