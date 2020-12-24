import React, { Component } from "react";
import ReactHowler from "react-howler";

class Audio extends Component {
  // This sound file may not work due to cross-origin setting
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loop: true,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true,
    });
    console.log("play");
  }

  handlePause() {
    this.setState({
      playing: false,
    });
    console.log("pause");
  }

  render() {
    return (
      <div>
        <ReactHowler
          src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          playing={this.state.playing}
          loop={this.state.loop}
        />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}
export default Audio;
