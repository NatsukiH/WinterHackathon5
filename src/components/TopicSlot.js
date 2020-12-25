// import { Grid } from "@material-ui/core";

function TopicSlot() {
  var topicCnt = 5; // topicの数
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
      if (count !== topicCnt - 1) {
        document.querySelector(".slot1").textContent = TopicArray[count++];
      } else {
        count = 0;
        document.querySelector(".slot1").textContent = TopicArray[count++];
      }
    }
  }, 100);

  function myStart() {
    Flg = 1;
  }

  function myStop() {
    Flg = 0;
  }

  return (
    <div>
      <button type="button" id="spin" onClick={myStart}>
        START
      </button>
      <span class="slot1">話題スロット！！</span>
      <button type="button" id="stop1" onClick={myStop}>
        STOP
      </button>
    </div>
  );
}

export default TopicSlot;
