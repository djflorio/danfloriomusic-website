import * as actions from './PlayerActions';

const defaultState = {
  currentSong: {},
  playing: false,
  playPercent: 0,
  currentTime: 0
}

const player = (state=defaultState, action) => {
  switch(action.type) {
    case actions.TOGGLE_PLAY: {
      return {
        ...state,
        playing: action.playing
      }
    }
    case actions.LOAD_SONG: {
      return {
        ...state,
        currentSong: action.song
      }
    }
    case actions.UPDATE_PERCENTAGE: {
      return {
        ...state,
        playPercent: action.percentage
      }
    }
    case actions.UPDATE_CURRENT_TIME: {
      return {
        ...state,
        currentTime: action.time
      }
    }
    default: return state;
  }
}

export default player;