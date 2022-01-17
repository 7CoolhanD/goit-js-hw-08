import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(sec => {
      localStorage.setItem('videoplayer-curent-time', JSON.stringify(sec));
    });
  }, 1000),
);

const savedStorageTime = JSON.parse(localStorage.getItem('videoplayer-curent-time') || 0);
player.setCurrentTime(savedStorageTime);
