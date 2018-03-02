import React from 'react';
import './Player.css';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';

const Player = ({playing, playPercent, togglePlay, onScrub}) => {
  return (
    <div className="player">
      <FontAwesomeIcon
        className="player__play"
        icon={playing ? faPause : faPlay}
        onClick={togglePlay}
      />
      <div className="player__timeline" onClick={onScrub}>
        <div
          className="player__progress"
          style={{ width: playPercent + '%' }}
        >
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  song: PropTypes.object.isRequired,
  playPercent: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired,
  onScrub: PropTypes.func.isRequired
}

export default Player;