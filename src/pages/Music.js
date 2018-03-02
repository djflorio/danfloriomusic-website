import React from 'react';
//import { songs } from './songs';
import './Music.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';

class Music extends React.Component {

  constructor(props) {
    super(props);
    const audio = new Audio();
    audio.src = require('./audio/adaywiser/comingmyway.mp3');
    audio.controls = true;
    audio.autoplay = false;
    this.state = {
      currentSong: audio,
      context: null,
      analyser: null,
      canvas: null,
      ctx: null,
      source: null,
      playing: false
    }

    this.frameLooper = this.frameLooper.bind(this);
    this.toggleAudio = this.toggleAudio.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
  }

  componentDidMount() {
    this.state.currentSong.addEventListener("canplaythrough", () => {
      this.setState({ duration: this.state.currentSong.duration });
    }, false);
    this.state.currentSong.addEventListener("timeupdate", this.timeUpdate, false);
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const canvas = document.querySelector('.music__canvas');
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
      source: source
    });
    this.frameLooper();
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

  timeUpdate() {
    this.setState({
      playPercent: 100 * (this.state.currentSong.currentTime / this.state.duration)
    });
  }

  toggleAudio() {
    if (this.state.currentSong.paused) {
      this.state.currentSong.play();
      this.setState({ playing: true });
    } else {
      this.state.currentSong.pause();
      this.setState({ playing: false });
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
            />
          </div>
          <div className="music__album">
            <img
              className="music__album-img"
              src={require('./img/malleability.jpg')}
              alt="Malleability"
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
        <div className="music__player">
          <FontAwesomeIcon
            className="music__player-play"
            icon={this.state.playing ? faPause : faPlay}
            onClick={this.toggleAudio}
          />
          <div className="music__player-timeline">
            <div
              className="music__player-progress"
              style={{ width: this.state.playPercent + '%' }}
            >
            </div>
          </div>
        </div>
        <canvas className="music__canvas"></canvas>
      </div>
    );
  }
}

export default Music;