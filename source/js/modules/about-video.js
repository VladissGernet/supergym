const videoContainer = document.querySelector('.about__video-container');
const previewVideo = videoContainer.querySelector('.about__video-preview');
const playButton = videoContainer.querySelector('.about__play-button');

import { ABOUT_VIDEO_LINK } from './constants.js';

const onPlayButtonClick = () => {
  previewVideo.style.opacity = '0';
  videoContainer.style.zIndex = '0';
  videoContainer.insertAdjacentHTML('afterbegin', ABOUT_VIDEO_LINK);
  playButton.removeEventListener('click', onPlayButtonClick);
  playButton.remove();
};


const initAboutVideo = () => {
  playButton.addEventListener('click', onPlayButtonClick);
};

export { initAboutVideo };
