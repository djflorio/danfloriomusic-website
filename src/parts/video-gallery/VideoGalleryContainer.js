import React from 'react';
import VideoGallery from './VideoGallery';
import { connect } from 'react-redux';
import * as actions from './VideoGalleryActions';
import { closePlayer } from '../player/PlayerActions';

import { videos } from './videos';

class VideoGalleryContainer extends React.Component {
  render() {
    return (
      <VideoGallery
        videos={videos}
        openVideo={this.props.openVideo}
        closeVideo={this.props.closeVideo}
        currentVideo={this.props.currentVideo}
        modalOpen={this.props.modalOpen}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.videogallery.modalOpen,
    currentVideo: state.videogallery.currentVideo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openVideo: (vId) => {
      dispatch(closePlayer());
      dispatch(actions.openVideo(vId));
    },
    closeVideo: () => {
      dispatch(actions.closeVideo());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoGalleryContainer);