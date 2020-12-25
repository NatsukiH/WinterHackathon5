import React, { Component } from "react";
import ReactHowler from "react-howler";
import { Grid, Typography, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
import DoorBell from "../assets/Doorbell-Ding_Dong01-1.mp3";

class AudioDoorBell extends Component {
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
          src={DoorBell}
          playing={this.state.playing}
          loop={this.state.loop}
        />
        <Grid container alignItems="center" justify="center">
          <Paper style={{ width: "35vw" }}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={8}>
                <Typography>「あれ，宅配かな？」 ※インターホン音</Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  <PlayCircleFilledRoundedIcon
                    fontSize="large"
                    onClick={this.handlePlay}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  <PauseCircleFilledRoundedIcon
                    fontSize="large"
                    onClick={this.handlePause}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
export default AudioDoorBell;
