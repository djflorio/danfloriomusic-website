import * as actions from './LibraryActions';

const defaultState = {
  albumOpen: false,
  album: {}
}

const library = (state=defaultState, action) => {
  switch(action.type) {
    case actions.OPEN_ALBUM: {
      return {
        ...state,
        albumOpen: true,
        album: action.album
      }
    }
    case actions.CLOSE_ALBUM: {
      return defaultState;
    }
    default: return state;
  }
}

export default library;