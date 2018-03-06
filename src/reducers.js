import { combineReducers } from 'redux';

import player from './parts/player/PlayerReducer';
import library from './parts/library/LibraryReducer';
import videogallery from './parts/video-gallery/VideoGalleryReducer';

export default combineReducers({
  player,
  library,
  videogallery
});