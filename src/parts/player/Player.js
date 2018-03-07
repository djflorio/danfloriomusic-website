import React from 'react';
import './Player.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const Player = (props) => {
  return (
    <div className={classnames("player", {"player--open": props.playerOpen})}>
      <span className="player__title">
        {props.currentSong.title}&nbsp;-&nbsp;{props.currentSong.album}
      </span>
      <FontAwesomeIcon
        className="player__play"
        icon={props.playing ? faPause : faPlay}
        onClick={props.playing ? props.pauseAudio : props.playAudio}
      />
      <div className="player__timeline" onClick={props.onScrub}>
        <div
          className="player__progress"
          style={{ width: props.playPercent + '%' }}
        >
        </div>
      </div>
      <FontAwesomeIcon
        className="player__close"
        icon={faTimes}
        onClick={props.closePlayer}
      />
    </div>
  );
}

Player.propTypes = {
  playing: PropTypes.bool.isRequired,
  playerOpen: PropTypes.bool.isRequired,
  playAudio: PropTypes.func.isRequired,
  pauseAudio: PropTypes.func.isRequired,
  playPercent: PropTypes.number.isRequired,
  onScrub: PropTypes.func.isRequired,
  currentSong: PropTypes.object.isRequired,
  closePlayer: PropTypes.func.isRequired
}

export default Player;