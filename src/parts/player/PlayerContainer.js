import React from 'react';
import { connect } from 'react-redux';
import * as actions from './PlayerActions';

import Player from './Player';

class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.props.loadSong('adaywiser/comingmyway');
  }

  render() {
    return (
      <Player
        playing={this.props.playing}
        togglePlay={() => this.props.togglePlay(this.props.currentSong)}
      />
    );
  }

}

function mapStateToProps(store) {
  return {
    currentSong: store.player.currentSong,
    playing: store.player.playing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    togglePlay: (song) => {
      dispatch(actions.togglePlay(song));
    },
    loadSong: (song) => {
      dispatch(actions.loadSong(song));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);