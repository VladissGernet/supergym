// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
const videoContainer = document.querySelector('.about__video-container');
const previewVideo = document.querySelector('.about__video-preview');
const playButton = document.querySelector('.about__play-button');

const videoLink = `
<iframe class="about__iframe" width="320" height="170" loading="lazy"
src="https://www.youtube.com/embed/9TZXsZItgdw?si=FAy52euLGMEPfMED&autoplay=1"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen></iframe>
 `;

const onPlayButtonClick = () => {
  previewVideo.style.opacity = '0';
  videoContainer.style.zIndex = '0';
  videoContainer.insertAdjacentHTML('afterbegin', videoLink);
  playButton.removeEventListener('click', onPlayButtonClick);
  playButton.remove();
};

playButton.addEventListener('click', onPlayButtonClick);



// videoContainer.insertAdjacentHTML('afterbegin', videoLink);
