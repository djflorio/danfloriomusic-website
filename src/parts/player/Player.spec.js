import * as actions from './PlayerActions';
import reducer from './PlayerReducer';

describe('Player', () => {

  const audio = new Audio();
  audio.src = require('./audio/adaywiser/comingmyway.mp3');

  const defaultState = {
    currentSong: {},
    playing: false,
    playPercent: 0,
    currentTime: 0
  }

  const currentTimeTest = {
    ...defaultState, 
    currentTime: 5
  }

  const loadTest = {
    ...defaultState,
    currentSong: audio
  }

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
    expect(reducer(undefined, actions.loadSong("adaywiser/comingmyway"))).toEqual(
      loadTest
    );
  });

  it('should create action to change current time', () => {
    expect(actions.updateCurrentTime(1)).toEqual({
      type: actions.UPDATE_CURRENT_TIME,
      time: 1
    });
  });

  it('should update current time', () => {
    expect(reducer(undefined, actions.updateCurrentTime(5))).toEqual(
      currentTimeTest
    );
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unrecognized" })).toEqual(
      defaultState
    );
  });

});