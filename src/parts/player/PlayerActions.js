export const PLAY_AUDIO = "PLAY_AUDIO";
export const PAUSE_AUDIO = "PAUSE_AUDIO";
export const LOAD_SONG = "LOAD_SONG";
export const UPDATE_PERCENTAGE = "UPDATE_PERCENTAGE";
export const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME";



export const playAudio = () => ({
  type: PLAY_AUDIO
});

export const pauseAudio = () => ({
  type: PAUSE_AUDIO
});

export const loadSong = (song, onUpdate) => {
  const player = new Audio();
  player.src = require('./audio/' + song + '.mp3');
  player.addEventListener("timeupdate", () => {
    const p = 100 * (player.currentTime / player.duration);
    onUpdate(p);
  }, false);
  return {
    type: LOAD_SONG,
    player: player
  }
}

export const updatePercentage = (percentage) => ({
  type: UPDATE_PERCENTAGE,
  percentage: percentage
});

export const updateCurrentTime = (time) => ({
  type: UPDATE_CURRENT_TIME,
  time: time
});


//player.addEventListener("timeupdate", () => timeUpdate(player), false);