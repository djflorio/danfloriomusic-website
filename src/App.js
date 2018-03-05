import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './parts/navbar/Navbar';
import Player from './parts/player/PlayerContainer';

import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';

class App extends React.Component {
  
  render() {
    const video = require('./misty.mp4');
    return (
      <Router>
      <div className="app">
        <video className="app__video" src={video} autoPlay loop></video>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/music" component={Music} />
        <Player />
      </div>
      </Router>
    );
  }
  
}

export default App;
