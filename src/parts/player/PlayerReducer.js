import * as actions from './PlayerActions';

const defaultState = {
  currentSong: {},
  playing: false
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
    default: return state;
  }
}

export default player;