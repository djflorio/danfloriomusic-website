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
    playerLoaded: false,
    currentSong: {}
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

  it('should create action to load song', () => {
    expect(actions.loadSong(
      "A Day Wiser",
      "Coming My Way",
      testFunction
    )).toEqual({
      type: actions.LOAD_SONG,
      data: { 
        album: "A Day Wiser",
        title: "Coming My Way",
        file: "adaywiser/comingmyway",
        onUpdate: testFunction
      }
    });
  });

  it('should create action to load song with &', () => {
    expect(actions.loadSong(
      "Big Thoughts in a Small Place",
      "Jessamine & Park",
      testFunction
    )).toEqual({
      type: actions.LOAD_SONG,
      data: { 
        album: "Big Thoughts in a Small Place",
        title: "Jessamine & Park",
        file: "bigthoughtsinasmallplace/jessamineandpark",
        onUpdate: testFunction
      }
    });
  });

  it('should create action to close player', () => {
    expect(actions.closePlayer()).toEqual({
      type: actions.CLOSE_PLAYER
    });
  });

  it('should close player with closePlayer', () => {
    expect(reducer(loadTest, actions.closePlayer())).toEqual({
      player: new Audio(),
      playing: false,
      playPercent: 0,
      currentTime: 0,
      playerOpen: false,
      playerLoaded: false,
      currentSong: {}
    })
  });
/*
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