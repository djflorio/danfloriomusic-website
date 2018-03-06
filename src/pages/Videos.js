import React from 'react';
import './Videos.css';

import VideoGallery from '../parts/video-gallery/VideoGalleryContainer';

const Videos = () => {
  return (
    <div className="videos app__page-container">
      <VideoGallery />
    </div>
  );
}

export default Videos;