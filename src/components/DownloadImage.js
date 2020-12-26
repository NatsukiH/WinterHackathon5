import "../App.css";
import { Typography, Paper, Grid, Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

function DownloadImage(props) {
  const LogoComponent = () => {
    return <img src={props.url} alt="ロゴ" width="40%" />;
  };

  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Grid item xs={12}>
        <LogoComponent />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<GetAppIcon />}
          style={{ backgroundColor: "#298D1A" }}
        >
          <a href={props.url} download={props.img} style={{ color: "white" }}>
            Download
          </a>
        </Button>
      </Grid>
    </Grid>
  );
}

export default DownloadImage;
