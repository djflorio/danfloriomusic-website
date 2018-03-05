import React from 'react';
import { connect } from 'react-redux';
import { loadSong, updatePercentage } from '../player/PlayerActions';
import './Library.css';

class Library extends React.Component {
  render() {
    return (
      <div className="library">
        <div className="library__album">
          <img
            className="library__album-img"
            src={require('./img/adaywiser.jpg')}
            alt="A Day Wiser"
            onClick={() => this.props.loadSong(
              'adaywiser/whitetailedhare',
              this.props.onUpdate
            )}
          />
        </div>
        <div className="library__album">
          <img
            className="library__album-img"
            src={require('./img/malleability.jpg')}
            alt="Malleability"
            onClick={() => this.props.loadSong(
              'malleability/emptylane',
              this.props.onUpdate
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

export default connect(null, mapDispatchToProps)(Library);