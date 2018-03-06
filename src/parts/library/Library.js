import React from 'react';
import './Library.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';

const Library = (props) => {
  return (
    <div className="library">
      <div className="library__grid">
        <div className="library__album">
          <img
            className="library__album-img"
            src={require('./img/adaywiser.jpg')}
            alt="A Day Wiser"
            onClick={() => props.openAlbum('adaywiser')}
          />
        </div>
        <div className="library__album">
          <img
            className="library__album-img"
            src={require('./img/malleability.jpg')}
            alt="Malleability"
            onClick={() => props.loadSong(
              'malleability/emptylane',
              props.onUpdate
            )}
          />
        </div>
        <div className="library__album">
          <img
            className="library__album-img"
            src={require('./img/bigthoughts.jpg')}
            alt="Big Thoughts in a Small Place"
          />
        </div>
      </div>
      { 
        props.albumOpen &&
        <div className="library__display">
          <h1 className="library__title">{props.album.title}</h1>
          <h2 className="library__release">{props.album.release}</h2>
          <ul className="library__tracks">
            {
              props.album.tracks.map(track => {
                return (
                  <li
                    key={track.title}
                    className="library__track"
                    onClick={() => {
                      if (props.playing && props.currentSong === track.file) {
                        props.pauseAudio();
                      }
                      else if (!props.playing && props.currentSong === track.file) {
                        props.playAudio();
                      } else {
                        props.loadSong(track.file, props.onUpdate)
                      }   
                    }}
                  >
                    <FontAwesomeIcon
                      className="library__play"
                      icon={ props.currentSong === track.file && props.playing ? faPause : faPlay}
                    />
                    {track.title}
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default Library;