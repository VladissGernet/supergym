import {
  initialPriceValues,
  PRICE_CURRENCY
} from './constants.js';

const priceElement = document.querySelector('.price');
const priceFilterContainer = priceElement.querySelector('.price__filter');
const priceCatalogItems = priceElement.querySelectorAll('.catalog__item');

const onFilterControlClick = (evt) => {
  const selectedControl = evt.target;
  const isSelectedControlSuitable = selectedControl.classList.contains('price__control' || selectedControl.classList.contains('price__control--active'));
  if (isSelectedControlSuitable === false) {
    return;
  }
  const activeControl = priceFilterContainer.querySelector('.price__control--active');
  activeControl.classList.remove('price__control--active');
  selectedControl.classList.add('price__control--active');
  const selectedControlValue = Number(selectedControl.textContent.replace(/\D+/g, ''));
  priceCatalogItems.forEach((item, index) => {
    const itemInitialValue = Object.values(initialPriceValues)[index];
    const backgroundValue = item.querySelector('.catalog__background-value');
    const itemMainValue = item.querySelector('.catalog__value');
    itemMainValue.innerHTML = '';
    itemMainValue.insertAdjacentHTML('beforeend', `${itemInitialValue * selectedControlValue}${PRICE_CURRENCY}`);
    backgroundValue.textContent = itemInitialValue * selectedControlValue;
  });
};


const initPriceFilter = () => {
  priceFilterContainer.addEventListener('click', onFilterControlClick);
};

export { initPriceFilter };
