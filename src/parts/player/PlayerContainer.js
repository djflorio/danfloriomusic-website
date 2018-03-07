import React from 'react';
import { connect } from 'react-redux';
import * as actions from './PlayerActions';

import Player from './Player';

class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.onScrub = this.onScrub.bind(this);
  }
  
  onScrub(e) {
    const timeline = document.querySelector('.player__timeline');
    let left = timeline.getBoundingClientRect().left;
    let width = timeline.getBoundingClientRect().width;
    let clickPos = e.clientX - left;
    let percentage = clickPos / width;

    this.props.updateTime(this.props.player.duration * percentage);
  }

  render() {
    return (
      <Player
        playing={this.props.playing}
        playerOpen={this.props.playerOpen}
        playAudio={this.props.playAudio}
        pauseAudio={this.props.pauseAudio}
        playPercent={this.props.playPercent}
        onScrub={this.onScrub}
        currentSong={this.props.currentSong}
        closePlayer={this.props.closePlayer}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.player.playing,
    player: state.player.player,
    playerOpen: state.player.playerOpen,
    playPercent: state.player.playPercent,
    currentSong: state.player.currentSong
  }
}

function mapDispatchToProps(dispatch) {
  return {
    playAudio: () => {
      dispatch(actions.playAudio());
    },
    pauseAudio: () => {
      dispatch(actions.pauseAudio());
    },
    updateTime: (time) => {
      dispatch(actions.updateTime(time));
    },
    closePlayer: () => {
      dispatch(actions.closePlayer());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);