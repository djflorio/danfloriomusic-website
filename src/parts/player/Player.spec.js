import * as actions from './PlayerActions';
import reducer from './PlayerReducer';

describe('Player', () => {

  const defaultState = {
    currentSong: {},
    playing: false
  }

  const audio = new Audio();
  audio.src = require('./audio/adaywiser/comingmyway.mp3');

  it('should toggle play true with togglePlay', () => {
    expect(actions.togglePlay(audio)).toEqual({
      type: actions.TOGGLE_PLAY,
      playing: true
    });
  });

  it('should create action to load song', () => {
    expect(actions.loadSong("adaywiser/comingmyway")).toEqual({
      type: actions.LOAD_SONG,
      song: audio
    });
  });

  it('should load song with loadSong', () => {
    expect(reducer(undefined, actions.loadSong("adaywiser/comingmyway"))).toEqual({
      currentSong: audio,
      playing: false
    });
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unrecognized" })).toEqual(
      defaultState
    );
  });

});