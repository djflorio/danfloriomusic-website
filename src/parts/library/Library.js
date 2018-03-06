import React from 'react';
import classnames from 'classnames';
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
            className={classnames(
              "library__album-img",
              {"library__album-img--open": props.album.title === "A Day Wiser"}
            )}
            src={require('./img/adaywiser.jpg')}
            alt="A Day Wiser"
            onClick={() => props.openAlbum('adaywiser')}
          />
        </div>
        <div className="library__album">
          <img
            className={classnames(
              "library__album-img",
              {"library__album-img--open": props.album.title === "Malleability"}
            )}
            src={require('./img/malleability.jpg')}
            alt="Malleability"
            onClick={() => props.openAlbum('malleability')}
          />
        </div>
        <div className="library__album">
          <img
            className={classnames(
              "library__album-img",
              {"library__album-img--open": props.album.title === "Big Thoughts in a Small Place"}
            )}
            src={require('./img/bigthoughts.jpg')}
            alt="Big Thoughts in a Small Place"
            onClick={() => props.openAlbum('bigthoughts')}
          />
        </div>
      </div>
      { 
        props.albumOpen &&
        <div className="library__display">
          <div className="library__display-info">
            <h1 className="library__title">{props.album.title}</h1>
            <h2 className="library__release">{props.album.release}</h2>
            {
              props.album.links.map(link => {
                return (
                  <a key={link.link} className="library__link" href={link.link} target="_blank">
                    {link.name}
                  </a>
                )
              })
            }
          </div>
          <ul className="library__tracks">
            {
              props.album.tracks.map(track => {
                return (
                  <li
                    key={track.title}
                    className="library__track"
                    onClick={() => {
                      props.playPauseLoad(
                        track.title,
                        props.album.title,
                        props.onUpdate,
                        props.playing,
                        props.currentSong
                      )}
                    }
                  >
                    <FontAwesomeIcon
                      className="library__play"
                      icon={ props.currentSong.title === track.file && props.playing ? faPause : faPlay}
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