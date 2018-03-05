import * as actions from './PlayerActions';

const defaultState = {
  player: {},
  playing: false,
  playPercent: 0,
  currentTime: 0,
  playerOpen: false
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
      return {
        ...state,
        player: action.player,
        playerOpen: true
      }
    }
    case actions.UPDATE_PERCENTAGE: {
      return {
        ...state,
        playPercent: action.percentage
      }
    }
    default: return state;
  }
}

export default player;


//player.src = require('./audio/' + song + '.mp3');
//player.addEventListener("timeupdate", () => timeUpdate(player), false);