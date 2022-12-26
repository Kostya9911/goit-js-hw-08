import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOC = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(KEY_LOC, data.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(KEY_LOC))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
