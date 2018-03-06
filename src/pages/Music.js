import React from 'react';
import './Music.css';

import Library from '../parts/library/LibraryContainer';

const Music = () => {
  return (
    <div className="music app__page-container">
      <Library />
    </div>
  );
}

export default Music;