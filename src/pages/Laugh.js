import "../App.css";
import { Grid } from "@material-ui/core";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

function Laugh() {
  return (
    <div className="App">
      <Header />
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12}>
          <PageTitle name="笑いを取る" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Laugh;
