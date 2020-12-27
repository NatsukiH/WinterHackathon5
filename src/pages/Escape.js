import "../App.css";
import { Grid } from "@material-ui/core";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import AudioPhoneRing from "../components/AudioPhoneRing";
import AudioDoorBell from "../components/AudioDoorBell";
import AudioHotaru from "../components/AudioHotaru";

function Escape() {
  return (
    <div className="App">
      <Header />
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12}>
          <PageTitle name="脱出する" />
        </Grid>
        <Grid item xs={12}>
          <AudioPhoneRing />
        </Grid>
        <Grid item xs={12}>
          <AudioDoorBell />
        </Grid>
        <Grid item xs={12}>
          <AudioHotaru />
        </Grid>
      </Grid>
    </div>
  );
}

export default Escape;
