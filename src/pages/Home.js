import "../App.css";
// import Header from "../components/Header";
import { Grid, Typography, Button } from "@material-ui/core";
import Logo from "../images/logo.png";

const LogoComponent = () => {
  return <img src={Logo} alt="ロゴ" width="40%" />;
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoComponent />
      </header>

      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6">
            突如訪れた無言の時間，あなたならどうする？
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            href="/topic"
            size="large"
            style={{ backgroundColor: "#298D1A", width: "30vw" }}
          >
            新しい話題を振る
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            href="/escape"
            size="large"
            style={{ backgroundColor: "#298D1A", width: "30vw" }}
          >
            脱出する
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            href="/laugh"
            size="large"
            style={{ backgroundColor: "#298D1A", width: "30vw" }}
          >
            笑いを取る
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
