import { combineReducers } from 'redux';

import player from './parts/player/PlayerReducer';
import library from './parts/library/LibraryReducer';

export default combineReducers({
  player,
  library
});