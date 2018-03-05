import React from 'react';
import './Player.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';

const Player = ({playing, playerOpen, playAudio, playPercent, onScrub}) => {
  return (
    <div className={classnames("player", {"player--open": playerOpen})}>
      <FontAwesomeIcon
        className="player__play"
        icon={playing ? faPause : faPlay}
        onClick={playAudio}
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
  playing: PropTypes.bool.isRequired,
  playerOpen: PropTypes.bool.isRequired,
  playAudio: PropTypes.func.isRequired,
  playPercent: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired,
  onScrub: PropTypes.func.isRequired
}

export default Player;