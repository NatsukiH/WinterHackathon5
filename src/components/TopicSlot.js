import { Grid, Button, Paper, Typography } from "@material-ui/core";
import AutorenewRoundedIcon from "@material-ui/icons/AutorenewRounded";

function TopicSlot() {
  var TopicArray = [
    "あいうえお",
    "かきくけこ",
    "させすせそ",
    "たちつてと",
    "なにぬねの",
  ]; // 画像ファイル名の設定
  var Flg = 0; // スタートボタンフラグ (0:動いていない 1:動いている)
  var count = 0;

  window.setInterval(function () {
    if (Flg == 1) {
      if (count !== TopicArray.length - 1) {
        document.querySelector(".slot1").textContent = TopicArray[count++];
      } else {
        count = 0;
        document.querySelector(".slot1").textContent = TopicArray[count++];
      }
    }
  }, 100);

  function myStart() {
    if (Flg == 0) {
      Flg = 1;
      document.querySelector(".btn").textContent = "Stop";
    } else {
      Flg = 0;
      document.querySelector(".btn").textContent = "Start";
    }
  }

  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Paper
            style={{
              width: "40vw",
              padding: "15px",
              border: "4px solid #298D1A",
            }}
          >
            <Typography variant="h6">
              <span class="slot1">話題スロット！！</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={myStart}
          startIcon={<AutorenewRoundedIcon />}
          style={{ backgroundColor: "#298D1A" }}
        >
          <div class="btn">Start</div>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopicSlot;
