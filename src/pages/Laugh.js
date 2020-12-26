import "../App.css";
import { Grid, Typography } from "@material-ui/core";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import DownloadImage from "../components/DownloadImage";
import VB_mugen from "../images/VB_mugen.jpg";
import VB_taekirenai from "../images/VB_taekirenai.jpg";

function Laugh() {
  return (
    <div className="App">
      <Header />
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12}>
          <PageTitle name="笑いを取る" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            静かな時こそバーチャル背景ネタの出番だ！
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <DownloadImage url={VB_taekirenai} img="VB_taekirenai.png" />
        </Grid>
        <Grid item xs={12}>
          <DownloadImage url={VB_mugen} img="VB_mugen.png" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Laugh;
