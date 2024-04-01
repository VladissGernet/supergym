// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';
import { Swiper } from 'swiper';

initAboutVideo();
initPriceFilter();


const swiper = new Swiper('.swiper-juri', {
  loop: true,
});

