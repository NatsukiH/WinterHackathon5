import { Grid, Button, Paper, Typography } from "@material-ui/core";
import AutorenewRoundedIcon from "@material-ui/icons/AutorenewRounded";

function TopicSlot() {
  var TopicArray = [
    "最近学校どう？",
    "周りにコロナになった人いる？",
    "最近学校行ってる？",
    "最近何してる？",
    "最近の趣味は？",
    "最近家で何してる？",
    "おすすめのアニメは？",
    "おすすめのドラマは？",
    "おすすめのアーティストは？",
    "おすすめの曲は？",
    "好きなお酒は？",
    "好きなアイドルは？",
    "好きな俳優・女優は？",
    "最近どこに行った？",
    "おすすめのスポットを教えて！",
    "北海道と沖縄だったらどっちに行きたい？",
    "海外に行ったことある？",
    "旅行に行くならどこに行きたい？",
    "おすすめのアイテムを教えて！",
    "これ買ってよかったっていうものを教えて！",
    "好きな香りは？",
    "おすすめのカフェは？",
    "おすすめのお取り寄せグルメを教えて！",
    "おすすめのデートスポットは？",
    "面白いエピソードを話して！",
    "一発ギャグをどうぞ！",
    "とりあえず写真撮ろうか",
    "おすすめのゲームは？",
    "最近寝てる？",
    "どんな時に至福のひと時を感じる？",
  ]; // 画像ファイル名の設定
  var Flg = 0; // スタートボタンフラグ (0:動いていない 1:動いている)
  var count = 0;

  window.setInterval(function () {
    if (Flg == 1) {
      var random = Math.floor(Math.random() * TopicArray.length);
      document.querySelector(".slot1").textContent = TopicArray[random];
    }
  }, 70);

  function myStart() {
    if (Flg == 0) {
      Flg = 1;
      document.querySelector(".btn").textContent = "Stop";
    } else {
      Flg = 0;
      document.querySelector(".btn").textContent = "もう一度回す";
    }
  }

  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Paper
            style={{
              width: "35vw",
              padding: "15px",
              border: "5px solid #298D1A",
              minWidth: "450px",
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
          <div class="btn">話題スロットStart</div>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopicSlot;
