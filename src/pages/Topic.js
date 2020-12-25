import "../App.css";
import { Grid, Typography } from "@material-ui/core";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import TopicSlot from "../components/TopicSlot";

function Topic() {
  return (
    <div className="App">
      <Header />
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12}>
          <PageTitle name="新しい話題を振る" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            この現状を打開する話題は...これだ！
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TopicSlot />
        </Grid>
      </Grid>
    </div>
  );
}

export default Topic;
