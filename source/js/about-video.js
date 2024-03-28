const videoContainer = document.querySelector('.about__video-container');
const previewVideo = document.querySelector('.about__video-preview');
const playButton = document.querySelector('.about__play-button');

import { aboutVideoLink } from './constants.js';

const onPlayButtonClick = () => {
  previewVideo.style.opacity = '0';
  videoContainer.style.zIndex = '0';
  videoContainer.insertAdjacentHTML('afterbegin', aboutVideoLink);
  playButton.removeEventListener('click', onPlayButtonClick);
  playButton.remove();
};


const initAboutVideo = () => {
  playButton.addEventListener('click', onPlayButtonClick);
};

export { initAboutVideo };

