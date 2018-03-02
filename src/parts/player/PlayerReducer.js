import * as actions from './PlayerActions';

const defaultState = {
  currentSong: {},
  playing: false,
  playPercent: 0
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
    default: return state;
  }
}

export default player;