import { Typography, Paper, Grid } from "@material-ui/core";

function PageTitle(props) {
  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Paper
        style={{
          backgroundColor: "#298D1A",
          width: "35vw",
          margin: "5vh 0",
          minWidth: "350px",
        }}
      >
        <Typography style={{ color: "#FFFFFF" }}>{props.name}</Typography>
      </Paper>
    </Grid>
  );
}

export default PageTitle;
