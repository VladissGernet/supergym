import { initAboutVideo } from './modules/about-video.js';
import { initPriceFilter } from './modules/price-filter.js';
import { initSwiperJuri } from './modules/swiper-juri.js';
import { initSwiperReviews } from './modules/swiper-reviews.js';

initAboutVideo();
initPriceFilter();
initSwiperJuri();
initSwiperReviews();

const faqSection = document.querySelector('.faq');
const faqList = faqSection.querySelector('.faq__list');
const faqAccordions = faqSection.querySelectorAll('.faq__accordion');


faqList.addEventListener('click', (evt) => {
  const selectedButton = evt.target;
  if (selectedButton.classList.contains('faq__button') === false) {
    return;
  }
  const previousActiveButton = faqList.querySelector('.tab-button--active');
  previousActiveButton.classList.remove('tab-button--active');
  const targetButton = selectedButton.closest('.faq__button');
  targetButton.classList.add('tab-button--active');

  for (const accordion of faqAccordions) {
    const isAccordionNotHid = accordion.classList.contains('hidden') === false;
    if (isAccordionNotHid) {
      accordion.classList.add('hidden');
    }
    if (accordion.dataset.faqAccordion === targetButton.dataset.faqButton) {
      accordion.classList.remove('hidden');
    }
  }
});

