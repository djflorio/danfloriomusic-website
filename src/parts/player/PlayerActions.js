export const PLAY_AUDIO = "PLAY_AUDIO";
export const PAUSE_AUDIO = "PAUSE_AUDIO";
export const LOAD_SONG = "LOAD_SONG";
export const UPDATE_PERCENTAGE = "UPDATE_PERCENTAGE";
export const UPDATE_TIME = "UPDATE_TIME";

export const playAudio = () => ({
  type: PLAY_AUDIO
});

export const pauseAudio = () => ({
  type: PAUSE_AUDIO
});

export const loadSong = (album, title, onUpdate) => {

  const albumFile = album.replace(/\s/g, '').replace(/&/g, 'and').toLowerCase();
  const titleFile = title.replace(/\s/g, '').replace(/&/g, 'and').toLowerCase();
  const file = albumFile + '/' + titleFile;

  return {
    type: LOAD_SONG,
    data: { album, title, file, onUpdate }
  }
}

export const updatePercentage = (percentage) => ({
  type: UPDATE_PERCENTAGE,
  percentage: percentage
});

export const updateTime = (time) => ({
  type: UPDATE_TIME,
  time: time
});