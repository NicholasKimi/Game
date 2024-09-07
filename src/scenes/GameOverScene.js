import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }
  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }
  preload() {
    /*...........(1)..............*/
  }
  create() {
    /*............(2).............*/
    /*.........................*/
    this.add.text(100, 300, "Score: " + this.score, {
      fontSize: "32px",
      color: "black",
    });
    this.replayButton = this.add.image(200, 400, "replay-button").setInteractive().setScale(0.5);
    this.replayButton.once("pointerup",() => {
        this.scene.start("rise-of-azria-scene");
    },this)
  }
}