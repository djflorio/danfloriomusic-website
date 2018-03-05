import React from 'react';
import './Music.css';
import { connect } from 'react-redux';
import { loadSong, updatePercentage } from '../parts/player/PlayerActions';

class Music extends React.Component {
  render() {
    return (
      <div className="music">
        <div className="music__albums">
          <div className="music__album">
            <img
              className="music__album-img"
              src={require('./img/adaywiser.jpg')}
              alt="A Day Wiser"
              onClick={() => this.props.loadSong(
                'adaywiser/whitetailedhare',
                this.props.onUpdate
              )}
            />
          </div>
          <div className="music__album">
            <img
              className="music__album-img"
              src={require('./img/malleability.jpg')}
              alt="Malleability"
              onClick={() => this.props.loadSong(
                'malleability/emptylane',
                this.props.onUpdate
              )}
            />
          </div>
          <div className="music__album">
            <img
              className="music__album-img"
              src={require('./img/bigthoughts.jpg')}
              alt="Big Thoughts in a Small Place"
            />
          </div>
        </div>
        
        <canvas className="music__canvas"></canvas>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSong: (song, onUpdate) => {
      dispatch(loadSong(song, onUpdate));
    },
    onUpdate: (percentage) => {
      dispatch(updatePercentage(percentage));
    }
  }
}

export default connect(null, mapDispatchToProps)(Music);