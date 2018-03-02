import React from 'react';
import { connect } from 'react-redux';
import * as actions from './PlayerActions';

import Player from './Player';

class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.timeUpdate = this.timeUpdate.bind(this);
    this.props.loadSong('adaywiser/comingmyway', this.timeUpdate);
  }

  render() {
    return (
      <Player
        playing={this.props.playing}
        playPercent={this.props.playPercent}
        togglePlay={() => this.props.togglePlay(this.props.currentSong)}
      />
    );
  }

  timeUpdate(audio) {
    let percentage = 100 * (audio.currentTime / audio.duration);
    this.props.updatePercentage(percentage);
  }

}

function mapStateToProps(store) {
  return {
    currentSong: store.player.currentSong,
    playing: store.player.playing,
    playPercent: store.player.playPercent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    togglePlay: (song) => {
      dispatch(actions.togglePlay(song));
    },
    loadSong: (song, timeUpdate) => {
      dispatch(actions.loadSong(song, timeUpdate));
    },
    updatePercentage: (percentage) => {
      dispatch(actions.updatePercentage(percentage));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);