import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOC = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(KEY_LOC, data.seconds);
  }, 1000)
);
const savedTime = localStorage.getItem(KEY_LOC);

if (savedTime) {
  player.setCurrentTime(savedTime);
}
