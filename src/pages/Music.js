import React from 'react';
import './Music.css';

class Music extends React.Component {

  constructor(props) {
    super(props);
    const audio = new Audio();
    audio.src = require('./audio/adaywiser/01_Coming_My_Way.mp3');
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
  }

  componentWillMount() {
    this.state.currentSong.onplay = () => {
      this.setState({ playing: true });
    }
    this.state.currentSong.onpause = () => {
      this.setState({ playing: false });
    }
  }

  componentDidMount() {
    document.querySelector('.music__player').appendChild(this.state.currentSong);
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const canvas = document.querySelector('.music__canvas');
    const ctx = canvas.getContext('2d');
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
    window.webkitRequestAnimationFrame(this.frameLooper);
    if (this.state.playing && this.state.ctx && this.state.analyser) {
      let fbc_array = new Uint8Array(this.state.analyser.frequencyBinCount);
      this.state.analyser.getByteFrequencyData(fbc_array);
      this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
      this.state.ctx.fillStyle = '#1B1B0F';
      
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
            <img className="music__album-img" src={require('./img/adaywiser.jpg')} />
          </div>
          <div className="music__album">
            <img className="music__album-img" src={require('./img/malleability.jpg')} />
          </div>
          <div className="music__album">
            <img className="music__album-img" src={require('./img/bigthoughts.jpg')} />
          </div>
        </div>
        <div className="music__player"></div>
        <canvas className="music__canvas"></canvas>
      </div>
    );
  }
}

export default Music;