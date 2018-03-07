import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './VideoGallery.css';

const VideoGallery = (props) => {

  const parsedVideos = props.videos.map(video => {
    return (
      <div
        key={video.vId} className="videogallery__video"
        onClick={() => props.openVideo(video.vId)}
      >
        <p className="videogallery__title">
          {video.title}
        </p>
        <img
          src={"https://img.youtube.com/vi/" + video.vId + "/0.jpg"}
          className="videogallery__img"
          alt={video.title}
        />
      </div>
    )
  })

  const opts = {
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="videogallery">
      <div className="videogallery__section">
        { parsedVideos }
      </div>
      {
        props.modalOpen &&
        <div className="videogallery__modal" onClick={props.closeVideo}>
          <YouTube
            videoId={props.currentVideo}
            opts={opts}
            className="videogallery__youtube"
          />
        </div>
      }
    </div>
  );
}

VideoGallery.propTypes = {
  videos: PropTypes.array.isRequired,
  openVideo: PropTypes.func.isRequired,
  closeVideo: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool,
  currentVideo: PropTypes.string,
}

export default VideoGallery;