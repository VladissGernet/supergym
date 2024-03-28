const ABOUT_VIDEO_LINK = `
<iframe class="about__iframe" width="320" height="170" loading="lazy"
src="https://www.youtube.com/embed/9TZXsZItgdw?si=FAy52euLGMEPfMED&autoplay=1"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen></iframe>
 `;
const PRICE_CURRENCY = `
<svg class="catalog__currency" width="24" height="33"
aria-label="₽">
<use href="/__spritemap#sprite-rub"></use>
</svg>
`;
const initialPriceValues = {
  COACH: 5000,
  DAYTIME: 1700,
  FULL_DAY: 2700
};

export {
  ABOUT_VIDEO_LINK,
  initialPriceValues,
  PRICE_CURRENCY
};
