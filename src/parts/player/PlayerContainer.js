import React from 'react';
import { connect } from 'react-redux';
import * as actions from './PlayerActions';

import Player from './Player';

class PlayerContainer extends React.Component {

  /*constructor(props) {
    super(props);

    this.timeUpdate = this.timeUpdate.bind(this);
    this.props.initPlayer();
  }

  timeUpdate(audio) {
    let percentage = 100 * (audio.currentTime / audio.duration);
    this.props.updatePercentage(percentage);
  }

  onScrub(e) {
    let left = this.state.timeline.getBoundingClientRect().left;
    let width = this.state.timeline.getBoundingClientRect().width;
    let clickPos = e.clientX - left;
    let percentage = clickPos / width;
    let newSong = this.state.currentSong;
    newSong.currentTime = this.state.duration * percentage;
    this.setState({
      currentSong: newSong
    });
  }*/

  constructor(props) {
    super(props);

    //this.props.loadSong('adaywiser/whitetailedhare');
    //this.props.playAudio();
  }

  render() {
    return (
      <Player
        playing={this.props.playing}
        playerOpen={this.props.playerOpen}
        playAudio={this.props.playAudio}
        pauseAudio={this.props.pauseAudio}
        playPercent={this.props.playPercent}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.player.playing,
    player: state.player.player,
    playerOpen: state.player.playerOpen,
    playPercent: state.player.playPercent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSong: (song) => {
      dispatch(actions.loadSong(song));
    },
    playAudio: () => {
      dispatch(actions.playAudio());
    },
    pauseAudio: () => {
      dispatch(actions.pauseAudio());
    }
  }
}
/*
function mapStateToProps(store) {
  return {
    player: store.player.player,
    playing: store.player.playing,
    playPercent: store.player.playPercent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initPlayer: () => {
      dispatch(actions.initPlayer());
    },
    togglePlay: (song) => {
      dispatch(actions.togglePlay(song));
    },
    loadSong: (player, song, timeUpdate) => {
      dispatch(actions.loadSong(player, song, timeUpdate));
    },
    updatePercentage: (percentage) => {
      dispatch(actions.updatePercentage(percentage));
    }
  }
}
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);