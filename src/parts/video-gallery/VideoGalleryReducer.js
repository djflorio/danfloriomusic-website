import * as actions from './VideoGalleryActions';

const defaultState = {
  modalOpen: false,
  currentVideo: null
}

const videogallery = (state=defaultState, action) => {
  switch(action.type) {
    case (actions.OPEN_VIDEO): {
      return {
        ...state,
        modalOpen: true,
        currentVideo: action.vId
      }
    }
    case (actions.CLOSE_VIDEO): {
      return {
        ...state,
        modalOpen: false,
        currentVideo: null
      }
    }
    default: return state;
  }
}

export default videogallery;