import * as actions from './PlayerActions';

const defaultState = {
  player: new Audio(),
  playing: false,
  playPercent: 0,
  currentTime: 0,
  playerLoaded: false,
  playerOpen: false,
  currentSong: {}
}

const player = (state=defaultState, action) => {
  switch(action.type) {
    case actions.PLAY_AUDIO: {
      if (state.player) { state.player.play(); }
      return {
        ...state,
        playing: true
      }
    }
    case actions.PAUSE_AUDIO: {
      if (state.player) { state.player.pause(); }
      return {
        ...state,
        playing: false
      }
    }
    case actions.LOAD_SONG: {
      state.player.pause();
      state.player.src = require('./audio/' + action.data.file + '.mp3');
      state.player.addEventListener("timeupdate", () => {
        const p = 100 * (state.player.currentTime / state.player.duration);
        action.data.onUpdate(p);
      }, false);
      state.player.play();
      return {
        ...state,
        playerOpen: true,
        playerLoaded: true,
        playing: true,
        currentSong: {
          album: action.data.album,
          title: action.data.title,
          file: action.data.file
        }
      }
    }
    case actions.CLOSE_PLAYER: {
      state.player.pause();
      state.player.remove();
      return defaultState;
    }
    case actions.UPDATE_PERCENTAGE: {
      return {
        ...state,
        playPercent: action.percentage
      }
    }
    case actions.UPDATE_TIME: {
      state.player.currentTime = action.time;
      return {
        ...state
      }
    }
    default: return state;
  }
}

export default player;


//player.src = require('./audio/' + song + '.mp3');
//player.addEventListener("timeupdate", () => timeUpdate(player), false);