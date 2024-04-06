
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

const checkWindowWidthJuri = () => {
  switch (true) {
    case window.innerWidth < TABLET_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.MOBILE;
      swiperJuri.allowTouchMove = true;
      break;
    case window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.TABLET;
      swiperJuri.allowTouchMove = true;
      break;
    case window.innerWidth >= DESKTOP_WIDTH:
      swiperJuri.params.slidesPerView = JuriSlidesPerView.DESKTOP;
      swiperJuri.allowTouchMove = false;
  }
  swiperJuri.update();
};

const initSwiperJuri = () => {
  checkWindowWidthJuri();
  window.addEventListener('resize', checkWindowWidthJuri);
};

export { initSwiperJuri };
