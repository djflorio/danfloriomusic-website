export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const LOAD_SONG = "LOAD_SONG";
export const UPDATE_PERCENTAGE = "UPDATE_PERCENTAGE";
export const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME";

export const togglePlay = (audio) => {
  let playing = false;
  if (audio.paused) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
  }
  
  return {
    type: TOGGLE_PLAY,
    playing: playing
  }
};

export const loadSong = (song, timeUpdate) => {
  const audio = new Audio();
  audio.src = require('./audio/' + song + '.mp3');
  audio.addEventListener("timeupdate", () => timeUpdate(audio), false);
  return {
    type: LOAD_SONG,
    song: audio
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