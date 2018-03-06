import React from 'react';
import { connect } from 'react-redux';
import { loadSong, updatePercentage, playAudio, pauseAudio } from '../player/PlayerActions';
import { openAlbum, closeAlbum } from './LibraryActions';
import './Library.css';

import Library from './Library';

class LibraryComponent extends React.Component {
  render() {
    return (
      <Library
        onUpdate = {this.props.onUpdate}
        openAlbum = {this.props.openAlbum}
        closeAlbum = {this.props.closeAlbum}
        albumOpen = {this.props.albumOpen}
        album = {this.props.album}
        currentSong = {this.props.currentSong}
        playing = {this.props.playing}
        playPauseLoad = {this.props.playPauseLoad}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    albumOpen: state.library.albumOpen,
    album: state.library.album,
    currentSong: state.player.currentSong,
    playing: state.player.playing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    playPauseLoad: (song, onUpdate, playing, currentSong) => {
      if (playing && currentSong === song) {
        dispatch(pauseAudio());
      }
      else if (!playing && currentSong === song) {
        dispatch(playAudio());
      } else {
        dispatch(loadSong(song, onUpdate));
      } 
    },
    onUpdate: (percentage) => {
      dispatch(updatePercentage(percentage));
    },
    openAlbum: (album) => {
      dispatch(openAlbum(album));
    },
    closeAlbum: () => {
      dispatch(closeAlbum());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryComponent);