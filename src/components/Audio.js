import React, { Component } from "react";
import ReactHowler from "react-howler";
import IconButton from "@material-ui/core/IconButton";
import MusicNoteSharpIcon from "@material-ui/icons/MusicNoteSharp";
import MusicOffSharpIcon from "@material-ui/icons/MusicOffSharp";
import PhoneRing from "../assets/Telephone-Ringtone02-1.mp3";

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
          src={PhoneRing}
          playing={this.state.playing}
          loop={this.state.loop}
        />
        <IconButton>
          <MusicNoteSharpIcon fontSize="large" onClick={this.handlePlay} />
        </IconButton>
        <IconButton>
          <MusicOffSharpIcon fontSize="large" onClick={this.handlePause} />
        </IconButton>
      </div>
    );
  }
}
export default Audio;
