import * as actions from './PlayerActions';
import reducer from './PlayerReducer';

describe('Player', () => {

  const player = new Audio();
  player.src = require('./audio/adaywiser/comingmyway.mp3');

  const playerTimeUpdate = { ...player }
  playerTimeUpdate.currentTime = 5;

  const defaultState = {
    player: new Audio(),
    playing: false,
    playPercent: 0,
    currentTime: 0,
    playerOpen: false,
    playerLoaded: false
  }

  const loadTest = {
    ...defaultState,
    player: player,
    playerOpen: true,
    playerLoaded: true,
    playing: true
  }

  const testFunction = () => { return true; }

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
/*
  it('should create action to load song', () => {
    expect(actions.loadSong(
      "adaywiser/comingmyway",
      testFunction
    )).toEqual({
      type: actions.LOAD_SONG,
      data: { song: "adaywiser/comingmyway", onUpdate: testFunction }
    });
  });

  it('should load song with loadSong', () => {
    expect(reducer(undefined, actions.loadSong(
        "adaywiser/comingmyway"
    ))).toEqual(
      loadTest
    );
  });
*/
  it('should create action to update time', () => {
    expect(actions.updateTime(5)).toEqual({
      type: actions.UPDATE_TIME,
      time: 5
    });
  });

  it('should update time with updateTime', () => {
    expect(reducer(loadTest, actions.updateTime(5))).toEqual({
      ...loadTest,
      player: player
    });
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unrecognized" })).toEqual(
      defaultState
    );
  });

});