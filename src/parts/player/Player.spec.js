import * as actions from './PlayerActions';
import reducer from './PlayerReducer';

describe('Player', () => {

  const player = new Audio();
  player.src = require('./audio/adaywiser/comingmyway.mp3');

  const defaultState = {
    player: {},
    playing: false,
    playPercent: 0,
    currentTime: 0,
    playerOpen: false
  }

  const currentTimeTest = {
    ...defaultState, 
    currentTime: 5
  }

  const loadTest = {
    ...defaultState,
    player: player,
    playerOpen: true
  }

  it('should create action to play audio', () => {
    expect(actions.playAudio()).toEqual({
      type: actions.PLAY_AUDIO
    });
  });

  it('should create action to pause audio', () => {
    expect(actions.pauseAudio()).toEqual({
      type: actions.PAUSE_AUDIO
    });
  });

  it('should create action to load song', () => {
    expect(actions.loadSong("adaywiser/comingmyway")).toEqual({
      type: actions.LOAD_SONG,
      player: player
    });
  });

  it('should load song with loadSong', () => {
    expect(reducer(undefined, actions.loadSong(
        "adaywiser/comingmyway"
    ))).toEqual(
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