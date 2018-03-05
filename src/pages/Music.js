import React from 'react';
import './Music.css';
import { connect } from 'react-redux';
import { loadSong, updatePercentage } from '../parts/player/PlayerActions';
import PlayerContainer from '../parts/player/PlayerContainer';

class Music extends React.Component {

  constructor(props) {
    super(props);

    /*this.state = {
      currentSong: audio,
      context: null,
      analyser: null,
      canvas: null,
      ctx: null,
      source: null,
      playing: false
    }*/

    this.frameLooper = this.frameLooper.bind(this);
  }

  componentDidMount() {
    /*this.state.currentSong.addEventListener("canplaythrough", () => {
      this.setState({ duration: this.state.currentSong.duration });
    }, false);
    this.state.currentSong.addEventListener("timeupdate", this.timeUpdate, false);
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const canvas = document.querySelector('.music__canvas');
    const timeline = document.querySelector('.music__player-timeline');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1B1B0F'
    const source = context.createMediaElementSource(this.state.currentSong);
    source.connect(analyser);
    analyser.connect(context.destination);
    this.setState({
      context: context,
      analyser: analyser,
      canvas: canvas,
      ctx: ctx,
      source: source,
      timeline: timeline
    });
    this.frameLooper();*/
  }

  frameLooper() {
    window.requestAnimationFrame(this.frameLooper);
    if (!this.state.currentSong.paused && this.state.ctx && this.state.analyser) {
      let fbc_array = new Uint8Array(this.state.analyser.frequencyBinCount);
      this.state.analyser.getByteFrequencyData(fbc_array);
      this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
      
      const bars = 100;
      let bar_x;
      let bar_width;
      let bar_height;
      for (let i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        this.state.ctx.fillRect(bar_x, this.state.canvas.height, bar_width, bar_height);
      }
    }
  }

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