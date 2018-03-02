export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const LOAD_SONG = "LOAD_SONG";

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

export const loadSong = (song) => {
  const audio = new Audio();
  audio.src = require('./audio/' + song + '.mp3');
  return {
    type: LOAD_SONG,
    song: audio
  }
}