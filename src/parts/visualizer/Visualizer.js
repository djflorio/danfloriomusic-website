import React from 'react';
import { connect } from 'react-redux';
import './Visualizer.css';

class Visualizer extends React.Component {
  
  constructor(props) {
    super(props);

    this.frameLooper = this.frameLooper.bind(this);
  }

  componentDidMount() {
    var AudioContext = window.AudioContext          // Default
              || window.webkitAudioContext;  // Safari and old versions of Chrome
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const canvas = document.querySelector('.visualizer');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1B1B0F';
    const source = context.createMediaElementSource(this.props.player);
    source.connect(analyser);
    analyser.connect(context.destination);
    this.frameLooper(analyser, ctx, canvas);
  }

  frameLooper(analyser, ctx, canvas) {
    window.requestAnimationFrame(() => this.frameLooper(analyser, ctx, canvas));
    let fbc_array = new Uint8Array(analyser.frequencyBinCount);
    
    if (this.props.playing) {
      analyser.getByteFrequencyData(fbc_array);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let bar_x;
      let bar_width;
      let bar_height;
      for (let i = 0; i < 100; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
      }
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render() {
    return (
      <canvas className="visualizer"></canvas>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.player.player,
    playing: state.player.playing
  }
}

export default connect(
  mapStateToProps,
  null
)(Visualizer);